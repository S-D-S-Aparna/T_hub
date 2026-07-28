import { Router } from "express";
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
export default router;