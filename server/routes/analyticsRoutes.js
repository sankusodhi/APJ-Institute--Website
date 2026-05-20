// routes/analyticsRoutes.js
// Dashboard analytics routes

import express from "express";
import { verifyJWT } from "../middleware/auth.js";
import { getDashboardAnalytics } from "../controllers/analyticsController.js";

const router = express.Router();

router.get("/summary", verifyJWT, getDashboardAnalytics);

export default router;
