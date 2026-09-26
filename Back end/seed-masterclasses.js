const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log("Seeding Masterclasses...");
  
  const events = [
    {
      title: "AI in Production Masterclass",
      description: "An intensive 2-hour masterclass on deploying AI models to production at scale.",
      date: new Date("2026-10-15T14:00:00Z"),
      location: "Virtual - Zoom",
      type: "masterclass",
    },
    {
      title: "Advanced React Patterns",
      description: "Master React performance optimization and advanced hooks in this interactive session.",
      date: new Date("2026-11-05T18:00:00Z"),
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
