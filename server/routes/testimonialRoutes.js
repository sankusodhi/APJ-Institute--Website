// routes/testimonialRoutes.js
// Testimonial management routes

import express from "express";
import {
  createTestimonial,
  getAllTestimonials,
  getAllTestimonialsAdmin,
  updateTestimonial,
  deleteTestimonial,
} from "../controllers/testimonialController.js";
import { verifyJWT } from "../middleware/auth.js";
import { validateTestimonial, validateIdParam, handleValidationErrors } from "../middleware/validation.js";

const router = express.Router();

router.get("/admin/all", verifyJWT, getAllTestimonialsAdmin);
router.post("/", validateTestimonial, handleValidationErrors, createTestimonial);
router.get("/", getAllTestimonials);
router.put("/:id", verifyJWT, validateIdParam, handleValidationErrors, updateTestimonial);
router.delete("/:id", verifyJWT, validateIdParam, handleValidationErrors, deleteTestimonial);

export default router;
