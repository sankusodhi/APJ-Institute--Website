// middleware/errorHandler.js
// Global error handling middleware

/**
 * Error handling middleware
 * Catches all errors and sends consistent error response format
 */
export const errorHandler = (err, req, res, next) => {
  console.error("❌ Error:", err);

  // Multer errors
  if (err.code === "LIMIT_FILE_SIZE") {
    return res.status(400).json({
      success: false,
      message: "File size exceeds maximum limit of 5MB",
    });
  }

  if (err.code === "LIMIT_FILE_COUNT") {
    return res.status(400).json({
      success: false,
      message: "Too many files uploaded",
    });
  }

  if (err.code === "LIMIT_UNEXPECTED_FILE") {
    return res.status(400).json({
      success: false,
      message: "Unexpected file field",
    });
  }

  // Multer MIME type error
  if (err.message && err.message.includes("Only image files")) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }

  // Prisma errors
  if (err.code === "P2002") {
    return res.status(400).json({
      success: false,
      message: `${err.meta.target[0]} already exists`,
    });
  }

  if (err.code === "P2025") {
    return res.status(404).json({
      success: false,
      message: "Record not found",
    });
  }

  // Default error response
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal server error",
    error: process.env.NODE_ENV === "development" ? err : undefined,
  });
};

/**
 * 404 Not Found middleware
 * Called when no route matches
 */
export const notFound = (req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`,
  });
};

export default errorHandler;
