import express from 'express';
import { PrismaClient } from '@prisma/client';
import { authenticateToken } from '../middleware/authMiddleware';

const router = express.Router();
const prisma = new PrismaClient();

// Get all posts for a community category
router.get('/posts', async (req, res) => {
  try {
    const { category } = req.query;
    const posts = await prisma.post.findMany({
      where: category ? { category: category as string } : undefined,
      include: {
        author: {
          select: { name: true, role: true }
        },
        comments: {
          include: {
            author: {
              select: { name: true, role: true }
            }
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    });
    res.json({ posts });
  } catch (error) {
    console.error("Fetch posts error:", error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

// Create a new post
router.post('/posts', authenticateToken, async (req: any, res) => {
  try {
    const { title, content, category } = req.body;
    const post = await prisma.post.create({
      data: {
        title,
        content,
        category,
        authorId: req.user.userId
      }
    });
    res.status(201).json({ message: 'Post created successfully', post });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create post' });
  }
});

// Add a comment to a post
router.post('/posts/:id/comments', authenticateToken, async (req: any, res) => {
  try {
    const { content } = req.body;
    const postId = parseInt(req.params.id);
    const comment = await prisma.comment.create({
      data: {
        content,
        postId,
        authorId: req.user.userId
      }
    });
    res.status(201).json({ message: 'Comment added successfully', comment });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add comment' });
  }
});

// Get leaderboard (Top contributors)
router.get('/leaderboard', async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      take: 10,
      select: {
        id: true,
        name: true,
        _count: {
          select: { posts: true, comments: true }
        }
      },
      orderBy: [
        { posts: { _count: 'desc' } },
        { comments: { _count: 'desc' } }
      ]
    });
    
    // Map to add points (mock logic: 10 pts per post, 5 pts per comment)
    const leaderboard = users.map(u => ({
      ...u,
      points: (u._count.posts * 10) + (u._count.comments * 5)
    })).sort((a, b) => b.points - a.points);
    
    res.json({ leaderboard });
  } catch (error) {
    console.error("Fetch leaderboard error:", error);
    res.status(500).json({ error: 'Failed to fetch leaderboard' });
  }
});

// Get polls for a category
router.get('/polls', async (req, res) => {
  try {
    const { category } = req.query;
    
    const dbPolls = await prisma.poll.findMany({
      where: category ? { category: category as string } : undefined,
      include: {
        options: {
          include: {
            _count: { select: { votes: true } }
          }
        },
        _count: { select: { votes: true } },
        author: { select: { name: true, role: true } }
      },
      orderBy: { createdAt: 'desc' }
    });

    const polls = dbPolls.map(poll => {
      const totalVotes = poll._count.votes;
      
      const formattedOptions = poll.options.map(opt => {
        const optionVotes = opt._count.votes;
        const percentage = totalVotes > 0 ? Math.round((optionVotes / totalVotes) * 100) : 0;
        return {
          id: opt.id,
          text: opt.text,
          votes: optionVotes,
          percentage
        };
      });

      return {
        id: poll.id,
        question: poll.question,
        category: poll.category,
        author: poll.author,
        options: formattedOptions,
        totalVotes,
        createdAt: poll.createdAt
      };
    });

    res.json({ polls });
  } catch (error) {
    console.error("Fetch polls error:", error);
    res.status(500).json({ error: 'Failed to fetch polls' });
  }
});

// Create a new poll
router.post('/polls', authenticateToken, async (req: any, res) => {
  try {
    const { question, category, options } = req.body;
    
    if (!options || !Array.isArray(options) || options.length < 2) {
      return res.status(400).json({ error: 'A poll must have at least 2 options' });
    }

    const poll = await prisma.poll.create({
      data: {
        question,
        category,
        authorId: req.user.userId,
        options: {
          create: options.map((opt: string) => ({ text: opt }))
        }
      },
      include: {
        options: true
      }
    });

    res.status(201).json({ message: 'Poll created successfully', poll });
  } catch (error) {
    console.error("Create poll error:", error);
    res.status(500).json({ error: 'Failed to create poll' });
  }
});

// Cast a vote on a poll
router.post('/polls/:id/vote', authenticateToken, async (req: any, res) => {
  try {
    const pollId = parseInt(req.params.id);
    const { optionId } = req.body;
    const userId = req.user.userId;

    const existingVote = await prisma.pollVote.findUnique({
      where: {
        pollId_userId: { pollId, userId }
      }
    });

    if (existingVote) {
      return res.status(400).json({ error: 'You have already voted on this poll' });
    }

    const vote = await prisma.pollVote.create({
      data: {
        pollId,
        optionId: parseInt(optionId),
        userId
      }
    });

    res.status(201).json({ message: 'Vote recorded successfully', vote });
  } catch (error) {
    console.error("Vote error:", error);
    res.status(500).json({ error: 'Failed to record vote' });
  }
});

export default router;
