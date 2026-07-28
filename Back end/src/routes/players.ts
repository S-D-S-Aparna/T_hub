import { Router } from "express";
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
export default router;