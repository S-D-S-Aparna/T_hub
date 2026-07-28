const fs = require('fs');
const path = require('path');

const routes = {
  'fitness': `import { Router } from "express";
import { PrismaClient } from "@prisma/client";
const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const stats = await prisma.fitnessStat.findMany({
      orderBy: { date: 'desc' }
    });
    res.json(stats);
  } catch (error) { res.status(500).json({ error: "Server error" }); }
});

router.post("/seed", async (req, res) => {
  try {
    const existing = await prisma.fitnessStat.count();
    if (existing > 0) return res.json({ message: "Already seeded" });
    const user = await prisma.user.findFirst();
    if (!user) return res.status(400).json({ error: "No user found" });
    await prisma.fitnessStat.create({
      data: { userId: user.id, steps: 8500, calories: 450, activeMinutes: 45, distance: 6.2 }
    });
    res.json({ message: "Fitness seeded successfully" });
  } catch (error) { res.status(500).json({ error: "Server error" }); }
});
export default router;`,

  'nutrition': `import { Router } from "express";
import { PrismaClient } from "@prisma/client";
const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const plans = await prisma.dietPlan.findMany();
    res.json(plans);
  } catch (error) { res.status(500).json({ error: "Server error" }); }
});

router.post("/seed", async (req, res) => {
  try {
    const existing = await prisma.dietPlan.count();
    if (existing > 0) return res.json({ message: "Already seeded" });
    const user = await prisma.user.findFirst();
    if (!user) return res.status(400).json({ error: "No user found" });
    await prisma.dietPlan.create({
      data: { userId: user.id, title: "High Protein Diet", goal: "Muscle Gain", dailyCalories: 2800, meals: JSON.stringify([{time: "Breakfast", meal: "Oats & Eggs"}]) }
    });
    res.json({ message: "Nutrition seeded successfully" });
  } catch (error) { res.status(500).json({ error: "Server error" }); }
});
export default router;`,

  'sports-roadmaps': `import { Router } from "express";
import { PrismaClient } from "@prisma/client";
const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const roadmaps = await prisma.roadmap.findMany();
    res.json(roadmaps);
  } catch (error) { res.status(500).json({ error: "Server error" }); }
});

router.post("/seed", async (req, res) => {
  try {
    const user = await prisma.user.findFirst();
    if (!user) return res.status(400).json({ error: "No user found" });
    const existing = await prisma.roadmap.findFirst({ where: { title: "Pro Cricket Player" } });
    if (existing) return res.json({ message: "Already seeded" });
    await prisma.roadmap.create({
      data: { userId: user.id, title: "Pro Cricket Player", goal: "Join National Team", milestones: JSON.stringify(["Join Academy", "State Level", "National Level"]) }
    });
    res.json({ message: "Sports roadmaps seeded successfully" });
  } catch (error) { res.status(500).json({ error: "Server error" }); }
});
export default router;`,

  'sports-scholarships': `import { Router } from "express";
import { PrismaClient } from "@prisma/client";
const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const scholarships = await prisma.scholarship.findMany();
    res.json(scholarships);
  } catch (error) { res.status(500).json({ error: "Server error" }); }
});

router.post("/seed", async (req, res) => {
  try {
    const existing = await prisma.scholarship.findFirst({ where: { title: "National Sports Talent Scholarship" } });
    if (existing) return res.json({ message: "Already seeded" });
    await prisma.scholarship.create({
      data: { title: "National Sports Talent Scholarship", description: "For under-19 athletes", organization: "Ministry of Sports", amount: "₹1,00,000" }
    });
    res.json({ message: "Sports scholarships seeded successfully" });
  } catch (error) { res.status(500).json({ error: "Server error" }); }
});
export default router;`,

  'sports-dashboard': `import { Router } from "express";
import { PrismaClient } from "@prisma/client";
const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    // Just a placeholder aggregating data
    res.json({ stats: { gamesPlayed: 24, winRate: 68, activeGoals: 3 } });
  } catch (error) { res.status(500).json({ error: "Server error" }); }
});
export default router;`,

  'athlete-profile': `import { Router } from "express";
import { PrismaClient } from "@prisma/client";
const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const profiles = await prisma.athleteProfile.findMany({ include: { user: true } });
    res.json(profiles);
  } catch (error) { res.status(500).json({ error: "Server error" }); }
});

router.post("/seed", async (req, res) => {
  try {
    const existing = await prisma.athleteProfile.count();
    if (existing > 0) return res.json({ message: "Already seeded" });
    const user = await prisma.user.findFirst();
    if (!user) return res.status(400).json({ error: "No user found" });
    await prisma.athleteProfile.create({
      data: { userId: user.id, sport: "Football", skillLevel: "Advanced", achievements: JSON.stringify(["MVP 2023"]), stats: JSON.stringify({ matches: 50 }) }
    });
    res.json({ message: "Athlete profile seeded successfully" });
  } catch (error) { res.status(500).json({ error: "Server error" }); }
});
export default router;`,

  'players': `import { Router } from "express";
import { PrismaClient } from "@prisma/client";
const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const players = await prisma.playerProfile.findMany({ include: { user: true } });
    res.json(players);
  } catch (error) { res.status(500).json({ error: "Server error" }); }
});

router.post("/seed", async (req, res) => {
  try {
    const existing = await prisma.playerProfile.count();
    if (existing > 0) return res.json({ message: "Already seeded" });
    const user = await prisma.user.findFirst();
    if (!user) return res.status(400).json({ error: "No user found" });
    await prisma.playerProfile.create({
      data: { userId: user.id, sport: "Tennis", skillLevel: "Intermediate", location: "Mumbai", availableDays: JSON.stringify(["Weekends"]) }
    });
    res.json({ message: "Players seeded successfully" });
  } catch (error) { res.status(500).json({ error: "Server error" }); }
});
export default router;`,

  'store': `import { Router } from "express";
import { PrismaClient } from "@prisma/client";
const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const products = await prisma.storeProduct.findMany();
    res.json(products);
  } catch (error) { res.status(500).json({ error: "Server error" }); }
});

router.post("/seed", async (req, res) => {
  try {
    const existing = await prisma.storeProduct.count();
    if (existing > 0) return res.json({ message: "Already seeded" });
    await prisma.storeProduct.createMany({
      data: [
        { name: "Pro Cricket Bat", category: "Equipment", price: "₹4,500", image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2069&auto=format&fit=crop" },
        { name: "Football Shoes", category: "Apparel", price: "₹2,999", image: "https://images.unsplash.com/photo-1518605368461-1e1e38ce7059?q=80&w=2072&auto=format&fit=crop" }
      ]
    });
    res.json({ message: "Store seeded successfully" });
  } catch (error) { res.status(500).json({ error: "Server error" }); }
});
export default router;`,

  'training-calendar': `import { Router } from "express";
import { PrismaClient } from "@prisma/client";
const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const sessions = await prisma.trainingSession.findMany({ orderBy: { date: 'asc' } });
    res.json(sessions);
  } catch (error) { res.status(500).json({ error: "Server error" }); }
});

router.post("/seed", async (req, res) => {
  try {
    const existing = await prisma.trainingSession.count();
    if (existing > 0) return res.json({ message: "Already seeded" });
    const user = await prisma.user.findFirst();
    if (!user) return res.status(400).json({ error: "No user found" });
    await prisma.trainingSession.create({
      data: { userId: user.id, title: "Morning Run", sport: "Athletics", date: new Date(), duration: 60 }
    });
    res.json({ message: "Training calendar seeded successfully" });
  } catch (error) { res.status(500).json({ error: "Server error" }); }
});
export default router;`,

  'recovery': `import { Router } from "express";
import { PrismaClient } from "@prisma/client";
const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const plans = await prisma.recoveryPlan.findMany();
    res.json(plans);
  } catch (error) { res.status(500).json({ error: "Server error" }); }
});

router.post("/seed", async (req, res) => {
  try {
    const existing = await prisma.recoveryPlan.count();
    if (existing > 0) return res.json({ message: "Already seeded" });
    const user = await prisma.user.findFirst();
    if (!user) return res.status(400).json({ error: "No user found" });
    await prisma.recoveryPlan.create({
      data: { userId: user.id, injuryType: "Ankle Sprain", exercises: JSON.stringify(["Ankle Rotations"]), duration: "2 Weeks", progress: 50 }
    });
    res.json({ message: "Recovery seeded successfully" });
  } catch (error) { res.status(500).json({ error: "Server error" }); }
});
export default router;`,

  'achievements': `import { Router } from "express";
import { PrismaClient } from "@prisma/client";
const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const achievements = await prisma.achievement.findMany();
    res.json(achievements);
  } catch (error) { res.status(500).json({ error: "Server error" }); }
});

router.post("/seed", async (req, res) => {
  try {
    const existing = await prisma.achievement.count();
    if (existing > 0) return res.json({ message: "Already seeded" });
    const user = await prisma.user.findFirst();
    if (!user) return res.status(400).json({ error: "No user found" });
    await prisma.achievement.create({
      data: { userId: user.id, title: "Marathon Finisher", description: "Completed 42km marathon", badgeIcon: "medal" }
    });
    res.json({ message: "Achievements seeded successfully" });
  } catch (error) { res.status(500).json({ error: "Server error" }); }
});
export default router;`
};

for (const [name, content] of Object.entries(routes)) {
  fs.writeFileSync(path.join(__dirname, 'src/routes', name + '.ts'), content);
}
console.log('Routes generated');
