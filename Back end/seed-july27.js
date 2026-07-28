const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.findFirst();
  if (!user) {
    console.log('No user found to associate data with.');
    return;
  }

  const july27 = new Date('2026-07-27T10:00:00Z');

  // Insert Posts for July 27
  await prisma.post.create({
    data: {
      title: 'Welcome to the Community!',
      content: 'This is a test post for July 27th. We are excited to have you all here.',
      category: 'all-mentors',
      createdAt: july27,
      updatedAt: july27,
      authorId: user.id
    }
  });

  await prisma.post.create({
    data: {
      title: 'Tech Upskilling Journey',
      content: 'Starting my tech journey today on July 27th. Anyone else learning React?',
      category: 'tech-upskilling',
      createdAt: july27,
      updatedAt: july27,
      authorId: user.id
    }
  });

  // Insert Events for July 27
  await prisma.event.create({
    data: {
      title: 'Community Meetup',
      description: 'Monthly community meetup to discuss goals.',
      date: july27,
      location: 'Virtual',
      type: 'meetup',
      url: 'https://zoom.us/test'
    }
  });

  await prisma.event.create({
    data: {
      title: 'Tech Workshop',
      description: 'Learn the basics of web development.',
      date: july27,
      location: 'Virtual',
      type: 'workshop',
      url: 'https://zoom.us/test'
    }
  });

  console.log('Successfully seeded data for July 27.');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
