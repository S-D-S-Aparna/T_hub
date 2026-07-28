import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

// Get all academies, optionally filter by sport
router.get("/", async (req, res) => {
  try {
    const { sport } = req.query;
    
    const query: any = {};
    if (sport) {
      query.sport = { contains: String(sport), mode: 'insensitive' };
    }

    const academies = await prisma.academy.findMany({
      where: query,
      orderBy: { rating: 'desc' },
    });

    res.json(academies);
  } catch (error) {
    console.error("Error fetching academies:", error);
    res.status(500).json({ error: "Server error fetching academies" });
  }
});

// Seed mock academies (for development)
router.post("/seed", async (req, res) => {
  try {
    const existing = await prisma.academy.count();
    if (existing > 0) {
      return res.json({ message: "Academies already seeded" });
    }

    await prisma.academy.createMany({
      data: [
        {
          name: "Pro Performance Academy",
          sport: "Cricket",
          rating: 4.8,
          reviews: 120,
          location: "Mumbai",
          price: "₹2,000",
          image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2069&auto=format&fit=crop"
        },
        {
          name: "Champions Sports Hub",
          sport: "Football",
          rating: 4.7,
          reviews: 95,
          location: "Bangalore",
          price: "₹2,500",
          image: "https://images.unsplash.com/photo-1518605368461-1e1e38ce7059?q=80&w=2072&auto=format&fit=crop"
        },
        {
          name: "Elite Badminton Center",
          sport: "Badminton",
          rating: 4.9,
          reviews: 210,
          location: "Hyderabad",
          price: "₹1,800",
          image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=2070&auto=format&fit=crop"
        }
      ]
    });
    res.json({ message: "Academies seeded successfully" });
  } catch (error) {
    console.error("Error seeding academies:", error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
