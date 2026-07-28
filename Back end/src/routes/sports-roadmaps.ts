import { Router } from "express";
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
export default router;