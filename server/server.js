// server.js
// Main Express server entry point

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Import configurations and middleware
import { initDatabase, disconnectDatabase } from "./config/database.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";
import { initializeCronJobs } from "./cron/jobs.js";

// Import routes
import authRoutes from "./routes/authRoutes.js";
import inquiryRoutes from "./routes/inquiryRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import facultyRoutes from "./routes/facultyRoutes.js";

// Load environment variables
dotenv.config();

// Get current directory for static files
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Initialize Express app
const app = express();

// Server Configuration
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || "development";

// ========================
// MIDDLEWARE
// ========================

// CORS Configuration
const corsOptions = {
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// Static files for uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Request logging middleware (development only)
if (NODE_ENV === "development") {
  app.use((req, res, next) => {
    console.log(`📨 ${req.method} ${req.originalUrl}`);
    next();
  });
}

// ========================
// API ROUTES
// ========================

// Health check route
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running",
    timestamp: new Date().toISOString(),
    environment: NODE_ENV,
  });
});

// Authentication routes
app.use("/api/auth", authRoutes);

// Inquiry routes
app.use("/api/inquiries", inquiryRoutes);

// Notification routes
app.use("/api/notifications", notificationRoutes);

// Event routes
app.use("/api/events", eventRoutes);

// Gallery routes
app.use("/api/gallery", galleryRoutes);

// Faculty routes
app.use("/api/faculty", facultyRoutes);

// ========================
// ERROR HANDLING
// ========================

// 404 Not Found middleware
app.use(notFound);

// Global error handler
app.use(errorHandler);

// ========================
// SERVER INITIALIZATION
// ========================

/**
 * Start the server
 */
async function startServer() {
  try {
    // Initialize database connection
    await initDatabase();

    // Initialize cron jobs
    initializeCronJobs();

    // Start listening
    app.listen(PORT, () => {
      console.log(`
╔═══════════════════════════════════════════════╗
║  🚀 APJ INSTITUTE BACKEND SERVER STARTED     ║
╚═══════════════════════════════════════════════╝

📍 Server URL: http://localhost:${PORT}
🌍 Client URL: ${process.env.CLIENT_URL || "http://localhost:5173"}
⚙️  Environment: ${NODE_ENV}
🗄️  Database: MySQL with Prisma ORM

📚 API Documentation:
   - Health Check: GET /api/health
   - Authentication: /api/auth/*
   - Inquiries: /api/inquiries/*
   - Notifications: /api/notifications/*
   - Events: /api/events/*
   - Gallery: /api/gallery/*
   - Faculty: /api/faculty/*

🔐 Protected routes require JWT token in Authorization header
📤 File uploads support: JPEG, PNG, GIF, WebP (max 5MB)

✅ Press Ctrl+C to stop the server
      `);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
    process.exit(1);
  }
}

// ========================
// GRACEFUL SHUTDOWN
// ========================

/**
 * Handle process termination
 */
async function handleShutdown() {
  console.log("\n🛑 Server shutting down...");
  try {
    await disconnectDatabase();
    console.log("✅ Database disconnected");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error during shutdown:", error);
    process.exit(1);
  }
}

// Handle signals
process.on("SIGINT", handleShutdown);
process.on("SIGTERM", handleShutdown);

// Start the server
startServer();

export default app;
