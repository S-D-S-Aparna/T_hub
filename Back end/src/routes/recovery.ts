import { Router } from "express";
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
export default router;