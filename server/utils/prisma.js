import { PrismaClient } from "../generated/prisma/index.js";

export const prisma = new PrismaClient();

export async function connectDB() {
  try {
    await prisma.$connect();
    console.log("✅ Database connected successfully");
  } catch (err) {
    console.error("❌ Failed to connect to database:", err);
    process.exit(1); // Exit the app if DB connection fails
  }
}

export default prisma;
