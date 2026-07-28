import express from 'express';
import { PrismaClient } from '@prisma/client';
import { authenticateToken } from '../middleware/authMiddleware';

const router = express.Router();
const prisma = new PrismaClient();

// Get chat history for a specific room
router.get('/:room', authenticateToken, async (req: any, res) => {
  try {
    const { room } = req.params;
    const messages = await prisma.chatMessage.findMany({
      where: {
        room: room
      },
      include: {
        sender: {
          select: { name: true, role: true }
        }
      },
      orderBy: {
        createdAt: 'asc'
      },
      // Optionally limit to last 50 messages
      take: 50
    });
    res.json({ messages });
  } catch (error) {
    console.error("Failed to fetch chat history", error);
    res.status(500).json({ error: 'Failed to fetch chat history' });
  }
});

export default router;
