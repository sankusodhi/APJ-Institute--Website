// routes/eventRoutes.js
// Event management routes

import express from "express";
import {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
  getUpcomingEvents,
} from "../controllers/eventController.js";
import { verifyJWT } from "../middleware/auth.js";
import { singleFileUpload } from "../config/multer.js";
import { validateEvent, validateIdParam, handleValidationErrors } from "../middleware/validation.js";

const router = express.Router();

/**
 * GET /api/events/upcoming/list
 * Get upcoming events (Public)
 * Must be before /:id route to match exact path
 */
router.get("/upcoming/list", getUpcomingEvents);

/**
 * POST /api/events
 * Create new event with optional image (Protected)
 */
router.post(
  "/",
  verifyJWT,
  singleFileUpload,
  validateEvent,
  handleValidationErrors,
  createEvent
);

/**
 * GET /api/events
 * Get all events (Public)
 */
router.get("/", getAllEvents);

/**
 * GET /api/events/:id
 * Get single event by ID (Public)
 */
router.get("/:id", validateIdParam, handleValidationErrors, getEventById);

/**
 * PUT /api/events/:id
 * Update event (Protected)
 */
router.put(
  "/:id",
  verifyJWT,
  validateIdParam,
  singleFileUpload,
  handleValidationErrors,
  updateEvent
);

/**
 * DELETE /api/events/:id
 * Delete event (Protected)
 */
router.delete("/:id", verifyJWT, validateIdParam, handleValidationErrors, deleteEvent);

export default router;
