// routes/authRoutes.js
// Authentication routes

import express from "express";
import {
  signup,
  login,
  getProfile,
  changePassword,
} from "../controllers/authController.js";
import { verifyJWT } from "../middleware/auth.js";
import { validateAdminSignup, validateAdminLogin, handleValidationErrors } from "../middleware/validation.js";

const router = express.Router();

/**
 * POST /api/auth/signup
 * Register new admin
 */
router.post("/signup", validateAdminSignup, handleValidationErrors, signup);

/**
 * POST /api/auth/login
 * Login admin and get JWT token
 */
router.post("/login", validateAdminLogin, handleValidationErrors, login);

/**
 * GET /api/auth/profile
 * Get admin profile (Protected)
 */
router.get("/profile", verifyJWT, getProfile);

/**
 * PUT /api/auth/change-password
 * Change admin password (Protected)
 */
router.put("/change-password", verifyJWT, changePassword);

export default router;
