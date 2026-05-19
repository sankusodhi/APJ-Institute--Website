// middleware/validation.js
// Request validation middleware

import { validationResult, body, param, query } from "express-validator";

/**
 * Middleware to handle validation errors
 * Checks if validation errors exist and sends response
 */
export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: errors.array().map((err) => ({
        field: err.param,
        message: err.msg,
      })),
    });
  }
  next();
};

// ========================
// VALIDATION RULES
// ========================

// Admin Authentication Validations
export const validateAdminSignup = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2 })
    .withMessage("Name must be at least 2 characters"),
  body("email")
    .trim()
    .isEmail()
    .withMessage("Valid email is required"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters")
    .matches(/[A-Z]/)
    .withMessage("Password must contain uppercase letter")
    .matches(/[0-9]/)
    .withMessage("Password must contain number"),
];

export const validateAdminLogin = [
  body("email")
    .trim()
    .isEmail()
    .withMessage("Valid email is required"),
  body("password")
    .notEmpty()
    .withMessage("Password is required"),
];

// Inquiry Validations
export const validateInquiry = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2 })
    .withMessage("Name must be at least 2 characters"),
  body("email")
    .trim()
    .isEmail()
    .withMessage("Valid email is required"),
  body("phone")
    .trim()
    .notEmpty()
    .withMessage("Phone number is required")
    .matches(/^[0-9\-\+\(\)\s]+$/)
    .withMessage("Invalid phone number format"),
  body("message")
    .trim()
    .notEmpty()
    .withMessage("Message is required")
    .isLength({ min: 10 })
    .withMessage("Message must be at least 10 characters"),
];

// Notification Validations
export const validateNotification = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 3 })
    .withMessage("Title must be at least 3 characters"),
  body("message")
    .trim()
    .notEmpty()
    .withMessage("Message is required"),
  body("type")
    .isIn(["info", "warning", "success", "error"])
    .withMessage("Type must be info, warning, success, or error"),
  body("priority")
    .isInt({ min: 0, max: 2 })
    .withMessage("Priority must be 0, 1, or 2"),
];

// Event Validations
export const validateEvent = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 3 })
    .withMessage("Title must be at least 3 characters"),
  body("description")
    .trim()
    .notEmpty()
    .withMessage("Description is required")
    .isLength({ min: 10 })
    .withMessage("Description must be at least 10 characters"),
  body("date")
    .notEmpty()
    .withMessage("Date is required")
    .isISO8601()
    .withMessage("Invalid date format")
    .custom((value) => new Date(value) > new Date())
    .withMessage("Date must be in the future"),
  body("location")
    .trim()
    .notEmpty()
    .withMessage("Location is required"),
];

// Gallery Validations
export const validateGallery = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 3 })
    .withMessage("Title must be at least 3 characters"),
  body("category")
    .optional()
    .trim()
    .isLength({ min: 2 })
    .withMessage("Category must be at least 2 characters"),
];

// Faculty Validations
export const validateFaculty = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2 })
    .withMessage("Name must be at least 2 characters"),
  body("role")
    .trim()
    .notEmpty()
    .withMessage("Role is required"),
  body("email")
    .optional()
    .trim()
    .isEmail()
    .withMessage("Invalid email format"),
  body("phone")
    .optional()
    .trim()
    .matches(/^[0-9\-\+\(\)\s]+$/)
    .withMessage("Invalid phone number format"),
  body("department")
    .optional()
    .trim(),
];

// ID Parameter Validation
export const validateIdParam = [
  param("id")
    .isInt({ min: 1 })
    .withMessage("ID must be a positive integer"),
];

export default handleValidationErrors;
