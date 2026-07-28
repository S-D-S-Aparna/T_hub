import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

// Get all sports coaches
router.get("/", async (req, res) => {
  try {
    const coaches = await prisma.mentorProfile.findMany({
      include: { user: true },
      // Optional: you can filter by expertise containing specific sports keywords
      where: {
        expertise: {
          not: "General" // Or any specific condition to get sports coaches
        }
      }
    });

    res.json(coaches);
  } catch (error) {
    console.error("Error fetching coaches:", error);
    res.status(500).json({ error: "Server error fetching coaches" });
  }
});

export default router;
