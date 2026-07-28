import { Router } from "express";
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
export default router;