import { Router } from "express";
import { PrismaClient } from "@prisma/client";
const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    // Just a placeholder aggregating data
    res.json({ stats: { gamesPlayed: 24, winRate: 68, activeGoals: 3 } });
  } catch (error) { res.status(500).json({ error: "Server error" }); }
});
export default router;