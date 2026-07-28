import express from 'express';
import { PrismaClient } from '@prisma/client';
import { authenticateToken } from '../middleware/authMiddleware';

const router = express.Router();
const prisma = new PrismaClient();

// Get user's notifications
router.get('/', authenticateToken, async (req: any, res) => {
  try {
    const notifications = await prisma.notification.findMany({
      where: { userId: req.user.userId },
      orderBy: { createdAt: 'desc' },
      take: 20 // Limit to 20 most recent
    });

    res.json({ notifications });
  } catch (error) {
    console.error("Fetch notifications error:", error);
    res.status(500).json({ error: 'Failed to fetch notifications' });
  }
});

// Mark notification as read
router.put('/:id/read', authenticateToken, async (req: any, res) => {
  try {
    const notificationId = parseInt(req.params.id);
    
    // Ensure the notification belongs to the user
    const existing = await prisma.notification.findUnique({
      where: { id: notificationId }
    });

    if (!existing || existing.userId !== req.user.userId) {
      return res.status(403).json({ error: 'Unauthorized or not found' });
    }

    const notification = await prisma.notification.update({
      where: { id: notificationId },
      data: { read: true }
    });

    res.json({ message: 'Marked as read', notification });
  } catch (error) {
    console.error("Mark notification read error:", error);
    res.status(500).json({ error: 'Failed to update notification' });
  }
});

// Mark all as read
router.put('/read-all', authenticateToken, async (req: any, res) => {
  try {
    await prisma.notification.updateMany({
      where: { userId: req.user.userId, read: false },
      data: { read: true }
    });

    res.json({ message: 'All marked as read' });
  } catch (error) {
    console.error("Mark all read error:", error);
    res.status(500).json({ error: 'Failed to update notifications' });
  }
});

export default router;
