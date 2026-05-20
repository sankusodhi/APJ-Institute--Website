// cron/jobs.js
// Scheduled tasks using node-cron

import cron from "node-cron";
import { getPrismaClient } from "../config/database.js";

const prisma = getPrismaClient();

/**
 * Delete inquiries older than 48 hours
 * Runs every hour at minute 0 (00:00, 01:00, 02:00, etc.)
 */
export const deleteOldInquiries = () => {
  cron.schedule("0 * * * *", async () => {
    try {
      // Calculate time 48 hours ago
      const fortyEightHoursAgo = new Date(Date.now() - 48 * 60 * 60 * 1000);

      // Delete inquiries older than 48 hours
      const deleted = await prisma.inquiry.deleteMany({
        where: {
          createdAt: {
            lt: fortyEightHoursAgo,
          },
        },
      });

      if (deleted.count > 0) {
        console.log(`✅ Auto-deleted ${deleted.count} old inquiries (older than 48 hours)`);
      }
    } catch (error) {
      console.error("❌ Error deleting old inquiries:", error);
    }
  });

  console.log("✅ Cron job scheduled: Delete old inquiries (every hour)");
};

/**
 * Delete notifications older than 72 hours
 * Runs every hour at minute 30 (00:30, 01:30, 02:30, etc.)
 */
export const deleteOldNotifications = () => {
  cron.schedule("30 * * * *", async () => {
    try {
      // Calculate time 72 hours ago
      const seventyTwoHoursAgo = new Date(Date.now() - 72 * 60 * 60 * 1000);

      // Delete notifications older than 72 hours
      const deleted = await prisma.notification.deleteMany({
        where: {
          createdAt: {
            lt: seventyTwoHoursAgo,
          },
        },
      });

      if (deleted.count > 0) {
        console.log(`✅ Auto-deleted ${deleted.count} old notifications (older than 72 hours)`);
      }
    } catch (error) {
      console.error("❌ Error deleting old notifications:", error);
    }
  });

  console.log("✅ Cron job scheduled: Delete old notifications (every hour)");
};

/**
 * Initialize all cron jobs
 */
export const initializeCronJobs = () => {
  console.log("🔄 Initializing cron jobs...");
  deleteOldInquiries();
  deleteOldNotifications();
  console.log("✅ All cron jobs initialized!");
};

export default initializeCronJobs;
