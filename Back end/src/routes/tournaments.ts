import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

// Get all tournaments
router.get("/", async (req, res) => {
  try {
    const { sport } = req.query;
    
    const query: any = {};
    if (sport) {
      query.sport = { contains: String(sport), mode: 'insensitive' };
    }

    const tournaments = await prisma.tournament.findMany({
      where: query,
      orderBy: { date: 'asc' },
    });

    res.json(tournaments);
  } catch (error) {
    console.error("Error fetching tournaments:", error);
    res.status(500).json({ error: "Server error fetching tournaments" });
  }
});

// Seed mock tournaments
router.post("/seed", async (req, res) => {
  try {
    const existing = await prisma.tournament.count();
    if (existing > 0) {
      return res.json({ message: "Tournaments already seeded" });
    }

    await prisma.tournament.createMany({
      data: [
        {
          title: "National Cricket Championship",
          sport: "Cricket",
          date: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 days from now
          location: "Wankhede Stadium, Mumbai",
          prize: "₹5,00,000",
          status: "upcoming",
          image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2005&auto=format&fit=crop"
        },
        {
          title: "State Level Football League",
          sport: "Football",
          date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
          location: "Salt Lake Stadium, Kolkata",
          prize: "₹3,00,000",
          status: "upcoming",
          image: "https://images.unsplash.com/photo-1518605368461-1e1e38ce7059?q=80&w=2072&auto=format&fit=crop"
        },
        {
          title: "Inter-City Badminton Open",
          sport: "Badminton",
          date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago (ongoing)
          location: "Gachibowli Stadium, Hyderabad",
          prize: "₹1,00,000",
          status: "ongoing",
          image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=2070&auto=format&fit=crop"
        }
      ]
    });
    res.json({ message: "Tournaments seeded successfully" });
  } catch (error) {
    console.error("Error seeding tournaments:", error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
