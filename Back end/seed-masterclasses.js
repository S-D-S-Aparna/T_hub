const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log("Seeding Masterclasses...");
  
  const events = [
    {
      title: "AI in Production Masterclass",
      description: "An intensive 2-hour masterclass on deploying AI models to production at scale.",
      date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      location: "Virtual - Zoom",
      type: "masterclass",
    },
    {
      title: "Advanced React Patterns",
      description: "Master React performance optimization and advanced hooks in this interactive session.",
      date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
      location: "Virtual - Google Meet",
      type: "masterclass",
    }
  ];

  for (const event of events) {
    const created = await prisma.event.create({
      data: event
    });
    console.log(`Created: ${created.title}`);
  }
  
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
