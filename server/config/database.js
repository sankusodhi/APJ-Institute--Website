// config/database.js
// Database connection configuration with Prisma
// This is a wrapper to ensure proper error handling and connection management

import { PrismaClient } from "@prisma/client";

let prisma;

// Get or create Prisma Client instance
export const getPrismaClient = () => {
  if (!prisma) {
    prisma = new PrismaClient({
      log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
    });
  }
  return prisma;
};

// Initialize Prisma connection
export const initDatabase = async () => {
  try {
    const prisma = getPrismaClient();
    // Test the connection
    await prisma.$queryRaw`SELECT 1`;
    console.log("✅ Database connected successfully!");
    return prisma;
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1);
  }
};

// Disconnect Prisma
export const disconnectDatabase = async () => {
  if (prisma) {
    await prisma.$disconnect();
    console.log("✅ Database disconnected!");
  }
};

export default getPrismaClient();
