// middleware/auth.js
// JWT authentication middleware for protected routes

import { verifyToken } from "../config/jwt.js";

/**
 * Middleware to verify JWT token and extract admin data
 * Checks if token is valid and adds admin info to request object
 */
export const verifyJWT = (req, res, next) => {
  try {
    // Get token from headers
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token provided. Please include Authorization header",
      });
    }

    // Verify token
    const decoded = verifyToken(token);

    // Add admin data to request object
    req.admin = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: error.message || "Token verification failed",
    });
  }
};

/**
 * Optional JWT middleware - doesn't fail if token is missing
 * Useful for public endpoints that can also accept authenticated requests
 */
export const verifyJWTOptional = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (token) {
      const decoded = verifyToken(token);
      req.admin = decoded;
    }

    next();
  } catch (error) {
    // Don't send error response, just continue
    next();
  }
};

export default verifyJWT;
