import { Router } from "express";
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
export default router;