import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const sessions = await prisma.liveSession.findMany({
      orderBy: { date: 'asc' },
    });
    res.json(sessions);
  } catch (error) {
    console.error("Error fetching live sessions:", error);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/seed", async (req, res) => {
  try {
    const existing = await prisma.liveSession.count();
    if (existing > 0) return res.json({ message: "Already seeded" });

    await prisma.liveSession.createMany({
      data: [
        {
          title: "Advanced Batting Techniques",
          coach: "Rahul Dravid",
          sport: "Cricket",
          date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
          participants: 120,
          status: "upcoming",
          image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2069&auto=format&fit=crop"
        },
        {
          title: "Football Tactics & Positioning",
          coach: "Sunil Chhetri",
          sport: "Football",
          date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
          participants: 85,
          status: "upcoming",
          image: "https://images.unsplash.com/photo-1518605368461-1e1e38ce7059?q=80&w=2072&auto=format&fit=crop"
        }
      ]
    });
    res.json({ message: "Live sessions seeded successfully" });
  } catch (error) {
    console.error("Error seeding live sessions:", error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
