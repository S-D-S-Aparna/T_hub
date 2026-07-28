import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import userRoutes from './routes/users';
import communityRoutes from './routes/community';
import bookingRoutes from './routes/bookings';
import chatRoutes from './routes/chat';
import roadmapsRoutes from './routes/roadmaps';
import scholarshipsRoutes from './routes/scholarships';
import resourcesRoutes from './routes/resources';
import eventsRoutes from './routes/events';
import savedRoutes from './routes/saved';
import supportRoutes from './routes/support';
import educationRoutes from './routes/education';
import eventRegistrationsRoutes from './routes/event-registrations';
import chatHistoryRoutes from './routes/chatHistory';
import notificationsRoutes from './routes/notifications';
import academiesRoutes from './routes/academies';
import tournamentsRoutes from './routes/tournaments';
import groundsRoutes from './routes/grounds';
import coachesRoutes from './routes/coaches';
import liveSessionsRoutes from './routes/live-sessions';
import fitnessRoutes from './routes/fitness';
import nutritionRoutes from './routes/nutrition';
import sportsRoadmapsRoutes from './routes/sports-roadmaps';
import sportsScholarshipsRoutes from './routes/sports-scholarships';
import sportsDashboardRoutes from './routes/sports-dashboard';
import athleteProfileRoutes from './routes/athlete-profile';
import playersRoutes from './routes/players';
import storeRoutes from './routes/store';
import trainingCalendarRoutes from './routes/training-calendar';
import recoveryRoutes from './routes/recovery';
import achievementsRoutes from './routes/achievements';
dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/community', communityRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/roadmaps', roadmapsRoutes);
app.use('/api/scholarships', scholarshipsRoutes);
app.use('/api/resources', resourcesRoutes);
app.use('/api/events', eventsRoutes);
app.use('/api/saved', savedRoutes);
app.use('/api/support', supportRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/event-registrations', eventRegistrationsRoutes);
app.use('/api/chat-history', chatHistoryRoutes);
app.use('/api/notifications', notificationsRoutes);
app.use('/api/academies', academiesRoutes);
app.use('/api/tournaments', tournamentsRoutes);
app.use('/api/grounds', groundsRoutes);
app.use('/api/coaches', coachesRoutes);
app.use('/api/live-sessions', liveSessionsRoutes);
app.use('/api/fitness', fitnessRoutes);
app.use('/api/nutrition', nutritionRoutes);
app.use('/api/sports-roadmaps', sportsRoadmapsRoutes);
app.use('/api/sports-scholarships', sportsScholarshipsRoutes);
app.use('/api/sports-dashboard', sportsDashboardRoutes);
app.use('/api/athlete-profile', athleteProfileRoutes);
app.use('/api/players', playersRoutes);
app.use('/api/store', storeRoutes);
app.use('/api/training-calendar', trainingCalendarRoutes);
app.use('/api/recovery', recoveryRoutes);
app.use('/api/achievements', achievementsRoutes);
app.get('/', (req, res) => {
  res.send('Be You API is running...');
});

if (process.env.NODE_ENV !== 'test') {
  // Socket.io connection logic
  io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on('join_room', (room) => {
      socket.join(room);
      console.log(`User ${socket.id} joined room ${room}`);
    });

    // Users can join their own personal room to receive direct notifications
    socket.on('join_user_room', (userId) => {
      const room = `user_${userId}`;
      socket.join(room);
      console.log(`User ${socket.id} joined personal room ${room}`);
    });

    socket.on('send_notification', async (data) => {
      // data: { userId, title, message, type, link }
      const { PrismaClient } = require('@prisma/client');
      const prisma = new PrismaClient();
      try {
        const notif = await prisma.notification.create({
          data: {
            userId: data.userId,
            title: data.title,
            message: data.message,
            type: data.type || 'system',
            link: data.link
          }
        });
        // Emit to the specific user's room
        io.to(`user_${data.userId}`).emit('new_notification', notif);
      } catch (error) {
        console.error("Error creating notification:", error);
      }
    });

    socket.on('send_message', async (data) => {
      // data: { room, content, senderId, senderName, senderRole }
      const { PrismaClient } = require('@prisma/client');
      const prisma = new PrismaClient();
      try {
        const message = await prisma.chatMessage.create({
          data: {
            content: data.content,
            room: data.room,
            senderId: data.senderId
          },
          include: {
            sender: {
              select: { name: true, role: true }
            }
          }
        });
        io.to(data.room).emit('receive_message', message);
      } catch (error) {
        console.error("Error saving message:", error);
      }
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });

    // Handle Fitness Live Sync Room
    socket.on('join_fitness_sync', () => {
      socket.join('fitness_live');
      console.log(`Socket ${socket.id} joined fitness_live room`);
    });

    socket.on('leave_fitness_sync', () => {
      socket.leave('fitness_live');
    });
  });

  // Emit Live Fitness Data every 3 seconds
  setInterval(() => {
    const liveData = {
      heartRate: Math.floor(Math.random() * (120 - 70 + 1) + 70), // Random HR between 70 and 120
      steps: Math.floor(Math.random() * 10), // Random step increments
      spo2: Math.floor(Math.random() * (100 - 95 + 1) + 95),
      caloriesBurned: Math.floor(Math.random() * 5),
    };
    io.to('fitness_live').emit('live_fitness_update', liveData);
  }, 3000);

  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;
