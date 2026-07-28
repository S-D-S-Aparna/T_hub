import { Router } from "express";
import { PrismaClient } from "@prisma/client";
const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const products = await prisma.storeProduct.findMany();
    res.json(products);
  } catch (error) { res.status(500).json({ error: "Server error" }); }
});

router.post("/seed", async (req, res) => {
  try {
    const existing = await prisma.storeProduct.count();
    if (existing > 0) return res.json({ message: "Already seeded" });
    await prisma.storeProduct.createMany({
      data: [
        { name: "Pro Cricket Bat", category: "Equipment", price: "₹4,500", image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2069&auto=format&fit=crop" },
        { name: "Football Shoes", category: "Apparel", price: "₹2,999", image: "https://images.unsplash.com/photo-1518605368461-1e1e38ce7059?q=80&w=2072&auto=format&fit=crop" }
      ]
    });
    res.json({ message: "Store seeded successfully" });
  } catch (error) { res.status(500).json({ error: "Server error" }); }
});
export default router;