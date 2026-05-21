// routes/faqRoutes.js
// FAQ management routes

import express from "express";
import {
  createFAQ,
  getAllFAQs,
  getFAQById,
  updateFAQ,
  deleteFAQ,
} from "../controllers/faqController.js";
import { verifyJWT } from "../middleware/auth.js";
import { validateFAQ, validateIdParam, handleValidationErrors } from "../middleware/validation.js";

const router = express.Router();

router.post("/", verifyJWT, validateFAQ, handleValidationErrors, createFAQ);
router.get("/", getAllFAQs);
router.get("/:id", validateIdParam, handleValidationErrors, getFAQById);
router.put("/:id", verifyJWT, validateIdParam, validateFAQ, handleValidationErrors, updateFAQ);
router.delete("/:id", verifyJWT, validateIdParam, handleValidationErrors, deleteFAQ);

export default router;
