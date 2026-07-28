const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log("Seeding real-world Polls...");
  
  // Find a user to act as author
  const user = await prisma.user.findFirst();
  if (!user) {
    console.log("No users found. Creating a dummy user.");
    return;
  }

  const poll1 = await prisma.poll.create({
    data: {
      question: "What is the most challenging topic in this field right now?",
      category: "all-mentors",
      authorId: user.id,
      options: {
        create: [
          { text: "Advanced Concepts" },
          { text: "Practical Implementation" },
          { text: "Finding Good Resources" },
          { text: "Time Management" }
        ]
      }
    }
  });

  const poll2 = await prisma.poll.create({
    data: {
      question: "Do you prefer video courses or text-based tutorials?",
      category: "all-mentors",
      authorId: user.id,
      options: {
        create: [
          { text: "Video Courses" },
          { text: "Text Tutorials" },
          { text: "Interactive Platforms" }
        ]
      }
    }
  });

  console.log(`Created Polls: ${poll1.id}, ${poll2.id}`);
  console.log("Done seeding.");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
