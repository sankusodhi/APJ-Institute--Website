// routes/galleryRoutes.js
// Gallery management routes for image uploads

import express from "express";
import {
  uploadGalleryImage,
  getAllGalleryImages,
  getGalleryImageById,
  updateGalleryImage,
  deleteGalleryImage,
  getGalleryByCategory,
} from "../controllers/galleryController.js";
import { verifyJWT } from "../middleware/auth.js";
import { singleFileUpload } from "../config/multer.js";
import { validateGallery, validateIdParam, handleValidationErrors } from "../middleware/validation.js";

const router = express.Router();

/**
 * GET /api/gallery/category/:category
 * Get gallery images by category (Public)
 * Must be before /:id route to match exact path
 */
router.get("/category/:category", getGalleryByCategory);

/**
 * POST /api/gallery
 * Upload new gallery image (Protected)
 */
router.post(
  "/",
  verifyJWT,
  singleFileUpload,
  validateGallery,
  handleValidationErrors,
  uploadGalleryImage
);

/**
 * GET /api/gallery
 * Get all gallery images (Public)
 */
router.get("/", getAllGalleryImages);

/**
 * GET /api/gallery/:id
 * Get single gallery image by ID (Public)
 */
router.get("/:id", validateIdParam, handleValidationErrors, getGalleryImageById);

/**
 * PUT /api/gallery/:id
 * Update gallery image (Protected)
 */
router.put(
  "/:id",
  verifyJWT,
  validateIdParam,
  singleFileUpload,
  handleValidationErrors,
  updateGalleryImage
);

/**
 * DELETE /api/gallery/:id
 * Delete gallery image (Protected)
 */
router.delete("/:id", verifyJWT, validateIdParam, handleValidationErrors, deleteGalleryImage);

export default router;
