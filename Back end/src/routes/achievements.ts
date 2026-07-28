import { Router } from "express";
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
export default router;