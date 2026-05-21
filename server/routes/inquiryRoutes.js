// routes/inquiryRoutes.js
// Inquiry management routes

import express from "express";
import {
  createInquiry,
  getAllInquiries,
  getInquiryById,
  updateInquiry,
  deleteInquiry,
  deleteAllInquiries,
} from "../controllers/inquiryController.js";
import { verifyJWT } from "../middleware/auth.js";
import { validateInquiry, validateIdParam, handleValidationErrors } from "../middleware/validation.js";

const router = express.Router();

/**
 * POST /api/inquiries
 * Create new inquiry (Public)
 */
router.post("/", validateInquiry, handleValidationErrors, createInquiry);

/**
 * GET /api/inquiries
 * Get all inquiries with pagination (Protected)
 */
router.get("/", verifyJWT, getAllInquiries);

/**
 * GET /api/inquiries/:id
 * Get single inquiry by ID (Protected)
 */
router.get("/:id", verifyJWT, validateIdParam, handleValidationErrors, getInquiryById);

/**
 * PUT /api/inquiries/:id
 * Update inquiry status (Protected)
 */
router.put("/:id", verifyJWT, validateIdParam, handleValidationErrors, updateInquiry);

/**
 * DELETE /api/inquiries/:id
 * Delete single inquiry (Protected)
 */
router.delete("/:id", verifyJWT, validateIdParam, handleValidationErrors, deleteInquiry);

/**
 * DELETE /api/inquiries
 * Delete all inquiries (Protected - Admin only)
 */
router.delete("/", verifyJWT, deleteAllInquiries);

export default router;
