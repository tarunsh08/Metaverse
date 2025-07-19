import express from 'express';
import { PrismaClient } from './generated/prisma/index.js';


const prisma = new PrismaClient();
const app = express();


app.get('/api/spaces', async (req, res) => {
  try {
    const spaces = await prisma.space.findMany({
      orderBy: { name: 'asc' }
    });

    return res.json(spaces);
  } catch (error) {
    return res.status(500).json({ error: "Error fetching spaces" });
  } finally {
    await prisma.$disconnect();
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});