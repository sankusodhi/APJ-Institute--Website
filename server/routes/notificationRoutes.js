// routes/notificationRoutes.js
// Notification management routes

import express from "express";
import {
  createNotification,
  getAllNotifications,
  getNotificationById,
  updateNotification,
  deleteNotification,
  getActiveNotifications,
} from "../controllers/notificationController.js";
import { verifyJWT } from "../middleware/auth.js";
import { validateNotification, validateIdParam, handleValidationErrors } from "../middleware/validation.js";

const router = express.Router();

/**
 * GET /api/notifications/active/list
 * Get active notifications (Public)
 * Must be before /:id route to match exact path
 */
router.get("/active/list", getActiveNotifications);

/**
 * POST /api/notifications
 * Create new notification (Protected)
 */
router.post("/", verifyJWT, validateNotification, handleValidationErrors, createNotification);

/**
 * GET /api/notifications
 * Get all notifications (Protected)
 */
router.get("/", verifyJWT, getAllNotifications);

/**
 * GET /api/notifications/:id
 * Get single notification by ID (Protected)
 */
router.get("/:id", verifyJWT, validateIdParam, handleValidationErrors, getNotificationById);

/**
 * PUT /api/notifications/:id
 * Update notification (Protected)
 */
router.put("/:id", verifyJWT, validateIdParam, handleValidationErrors, updateNotification);

/**
 * DELETE /api/notifications/:id
 * Delete notification (Protected)
 */
router.delete("/:id", verifyJWT, validateIdParam, handleValidationErrors, deleteNotification);

export default router;
