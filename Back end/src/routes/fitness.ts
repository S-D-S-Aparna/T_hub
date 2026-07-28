import { Router } from "express";
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
export default router;