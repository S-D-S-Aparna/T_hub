import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

// Get all sports grounds
router.get("/", async (req, res) => {
  try {
    const { sport } = req.query;
    
    const query: any = {};
    if (sport) {
      query.sport = { contains: String(sport), mode: 'insensitive' };
    }

    const grounds = await prisma.sportsGround.findMany({
      where: query,
      orderBy: { rating: 'desc' },
    });

    res.json(grounds);
  } catch (error) {
    console.error("Error fetching grounds:", error);
    res.status(500).json({ error: "Server error fetching grounds" });
  }
});

// Seed mock sports grounds
router.post("/seed", async (req, res) => {
  try {
    const existing = await prisma.sportsGround.count();
    if (existing > 0) {
      return res.json({ message: "Grounds already seeded" });
    }

    await prisma.sportsGround.createMany({
      data: [
        {
          name: "Metro Turf Club",
          location: "Bandra, Mumbai",
          sport: "Football",
          hourlyRate: "₹1,500/hr",
          amenities: ["Floodlights", "Changing Rooms", "Parking"],
          rating: 4.8,
          image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?q=80&w=2070&auto=format&fit=crop"
        },
        {
          name: "Smash Arena",
          location: "Indiranagar, Bangalore",
          sport: "Badminton",
          hourlyRate: "₹800/hr",
          amenities: ["Wooden Court", "AC", "Pro Shop"],
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=2070&auto=format&fit=crop"
        },
        {
          name: "Lords Cricket Ground (Replica)",
          location: "Gurgaon",
          sport: "Cricket",
          hourlyRate: "₹2,000/hr",
          amenities: ["Grass Pitch", "Pavilion", "Net Practice"],
          rating: 4.7,
          image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2069&auto=format&fit=crop"
        }
      ]
    });
    res.json({ message: "Grounds seeded successfully" });
  } catch (error) {
    console.error("Error seeding grounds:", error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
