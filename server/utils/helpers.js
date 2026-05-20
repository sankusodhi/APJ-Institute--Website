// utils/helpers.js
// Helper functions for common operations

import bcryptjs from "bcryptjs";

/**
 * Hash password using bcryptjs
 * @param {string} password - Plain text password
 * @returns {Promise<string>} Hashed password
 */
export const hashPassword = async (password) => {
  try {
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    throw new Error("Password hashing failed: " + error.message);
  }
};

/**
 * Compare plain text password with hashed password
 * @param {string} password - Plain text password to compare
 * @param {string} hashedPassword - Hashed password from database
 * @returns {Promise<boolean>} True if passwords match
 */
export const comparePassword = async (password, hashedPassword) => {
  try {
    const isMatch = await bcryptjs.compare(password, hashedPassword);
    return isMatch;
  } catch (error) {
    throw new Error("Password comparison failed: " + error.message);
  }
};

/**
 * Standard success response format
 * @param {string} message - Response message
 * @param {object} data - Response data
 * @returns {object} Formatted response
 */
export const successResponse = (message, data = null) => {
  return {
    success: true,
    message,
    data,
  };
};

/**
 * Standard error response format
 * @param {string} message - Error message
 * @param {number} statusCode - HTTP status code
 * @returns {object} Formatted error response
 */
export const errorResponse = (message, statusCode = 500) => {
  return {
    success: false,
    message,
    statusCode,
  };
};

/**
 * Delete uploaded file
 * @param {string} filePath - Path to file to delete
 */
export const deleteUploadedFile = (filePath) => {
  try {
    import("fs").then((fs) => {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    });
  } catch (error) {
    console.error("Error deleting file:", error);
  }
};

/**
 * Get file URL from filename
 * @param {string} filename - Filename from upload
 * @returns {string} Complete file URL
 */
export const getFileUrl = (filename) => {
  if (!filename) return null;
  return `/uploads/${filename}`;
};

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if email is valid
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number format (basic validation)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} True if phone number is valid
 */
export const isValidPhone = (phone) => {
  const phoneRegex = /^[0-9\-\+\(\)\s]{7,20}$/;
  return phoneRegex.test(phone);
};

/**
 * Normalize common string/number boolean inputs.
 * @param {unknown} value - Value to normalize
 * @param {boolean} fallback - Value to return when input is undefined/null
 * @returns {boolean}
 */
export const parseBoolean = (value, fallback = false) => {
  if (value === undefined || value === null || value === '') {
    return fallback;
  }

  if (typeof value === 'boolean') {
    return value;
  }

  if (typeof value === 'number') {
    return value !== 0;
  }

  const normalized = String(value).trim().toLowerCase();
  return ['true', '1', 'yes', 'on'].includes(normalized);
};

/**
 * Convert a string into a URL-friendly slug.
 * @param {string} value
 * @returns {string}
 */
export const slugify = (value) => {
  if (!value) return '';

  return String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

/**
 * Paginate array or query results
 * @param {Array|object} data - Data to paginate
 * @param {number} page - Page number (1-indexed)
 * @param {number} limit - Items per page
 * @returns {object} Paginated data with metadata
 */
export const paginate = (data, page = 1, limit = 10) => {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const total = Array.isArray(data) ? data.length : 0;
  const items = Array.isArray(data) ? data.slice(startIndex, endIndex) : [];

  return {
    items,
    pagination: {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit),
      hasMore: endIndex < total,
    },
  };
};

export default {
  hashPassword,
  comparePassword,
  successResponse,
  errorResponse,
  deleteUploadedFile,
  getFileUrl,
  isValidEmail,
  isValidPhone,
  parseBoolean,
  slugify,
  paginate,
};
