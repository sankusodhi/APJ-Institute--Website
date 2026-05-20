// routes/courseRoutes.js
// Course management routes

import express from "express";
import {
  createCourse,
  getAllCourses,
  getCourseById,
  getCourseBySlug,
  updateCourse,
  deleteCourse,
} from "../controllers/courseController.js";
import { verifyJWT } from "../middleware/auth.js";
import { singleFileUpload } from "../config/multer.js";
import { validateCourse, validateIdParam, handleValidationErrors } from "../middleware/validation.js";

const router = express.Router();

router.get("/slug/:slug", getCourseBySlug);
router.post("/", verifyJWT, singleFileUpload, validateCourse, handleValidationErrors, createCourse);
router.get("/", getAllCourses);
router.get("/:id", validateIdParam, handleValidationErrors, getCourseById);
router.put("/:id", verifyJWT, validateIdParam, singleFileUpload, handleValidationErrors, updateCourse);
router.delete("/:id", verifyJWT, validateIdParam, handleValidationErrors, deleteCourse);

export default router;
