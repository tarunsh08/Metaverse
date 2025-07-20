import http from "http";
import app from "./app.js";
import prisma, { connectDB } from "./utils/prisma.js";

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

// Graceful shutdown logic
async function handleExit() {
  await prisma.$disconnect();
  console.log("🔌 Prisma disconnected");
  process.exit();
}

// Register signal handlers
process.on("SIGINT", handleExit); // CTRL+C
process.on("SIGTERM", handleExit); // kill command or platform signals

const startServer = async () => {
  connectDB();

  server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

startServer();
