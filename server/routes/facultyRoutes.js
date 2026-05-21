// routes/facultyRoutes.js
// Faculty management routes

import express from "express";
import {
  createFaculty,
  getAllFaculty,
  getFacultyById,
  updateFaculty,
  deleteFaculty,
  getFacultyByDepartment,
  getActiveFaculty,
} from "../controllers/facultyController.js";
import { verifyJWT } from "../middleware/auth.js";
import { singleFileUpload } from "../config/multer.js";
import { validateFaculty, validateIdParam, handleValidationErrors } from "../middleware/validation.js";

const router = express.Router();

/**
 * GET /api/faculty/active/all
 * Get all active faculty members (Public)
 * Must be before /:id route to match exact path
 */
router.get("/active/all", getActiveFaculty);

/**
 * GET /api/faculty/department/:department
 * Get faculty by department (Public)
 * Must be before /:id route to match exact path
 */
router.get("/department/:department", getFacultyByDepartment);

/**
 * POST /api/faculty
 * Create new faculty member with optional image (Protected)
 */
router.post(
  "/",
  verifyJWT,
  singleFileUpload,
  validateFaculty,
  handleValidationErrors,
  createFaculty
);

/**
 * GET /api/faculty
 * Get all faculty members (Protected - Admin only)
 */
router.get("/", verifyJWT, getAllFaculty);

/**
 * GET /api/faculty/:id
 * Get single faculty member by ID (Public)
 */
router.get("/:id", validateIdParam, handleValidationErrors, getFacultyById);

/**
 * PUT /api/faculty/:id
 * Update faculty member (Protected)
 */
router.put(
  "/:id",
  verifyJWT,
  validateIdParam,
  singleFileUpload,
  handleValidationErrors,
  updateFaculty
);

/**
 * DELETE /api/faculty/:id
 * Delete faculty member (Protected)
 */
router.delete("/:id", verifyJWT, validateIdParam, handleValidationErrors, deleteFaculty);

export default router;
