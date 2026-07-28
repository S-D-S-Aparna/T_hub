const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log("Seeding real-time data...");
  
  // Find a user to act as author
  const user = await prisma.user.findFirst();
  if (!user) {
    console.log("No users found. Please sign up a user first.");
    return;
  }

  // Seed a notification
  await prisma.notification.create({
    data: {
      userId: user.id,
      type: "system",
      title: "Welcome to Be You Real-time!",
      message: "The notification bell is now active and live.",
      link: "/community"
    }
  });
  console.log(`Notification created for user ${user.name}`);

  // Seed a chat message in the global room
  await prisma.chatMessage.create({
    data: {
      content: "Hello everyone! The global chat is now live.",
      room: "community_global",
      senderId: user.id
    }
  });
  console.log("Global chat message created.");

}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
