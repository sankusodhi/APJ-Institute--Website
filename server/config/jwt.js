// config/jwt.js
// JWT configuration and token generation/verification helpers

import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key_here_min_32_characters_long_123456";
const JWT_EXPIRE = process.env.JWT_EXPIRE || "7d";

/**
 * Generate JWT token for admin
 * @param {number} adminId - Admin ID
 * @param {string} email - Admin email
 * @returns {string} JWT token
 */
export const generateToken = (adminId, email) => {
  try {
    const token = jwt.sign(
      {
        id: adminId,
        email: email,
        type: "admin",
      },
      JWT_SECRET,
      {
        expiresIn: JWT_EXPIRE,
      }
    );
    return token;
  } catch (error) {
    throw new Error("Failed to generate token: " + error.message);
  }
};

/**
 * Verify JWT token
 * @param {string} token - JWT token to verify
 * @returns {object} Decoded token data
 */
export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      throw new Error("Token has expired");
    }
    if (error.name === "JsonWebTokenError") {
      throw new Error("Invalid token");
    }
    throw new Error("Token verification failed: " + error.message);
  }
};

/**
 * Decode JWT token without verification (for debugging)
 * @param {string} token - JWT token to decode
 * @returns {object} Decoded token data
 */
export const decodeToken = (token) => {
  try {
    const decoded = jwt.decode(token);
    return decoded;
  } catch (error) {
    throw new Error("Failed to decode token: " + error.message);
  }
};

export default {
  generateToken,
  verifyToken,
  decodeToken,
  JWT_SECRET,
  JWT_EXPIRE,
};
