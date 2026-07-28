import { Router } from "express";
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
export default router;