// controllers/notificationController.js
// Notification management controllers

import { getPrismaClient } from "../config/database.js";

const prisma = getPrismaClient();

/**
 * Create new notification
 * POST /api/notifications
 * Body: { title, message, type, priority, isActive }
 * Requires: JWT token
 */
export const createNotification = async (req, res, next) => {
  try {
    const { title, message, type = "info", priority = 0, isActive = true } = req.body;

    // Create notification
    const notification = await prisma.notification.create({
      data: {
        title,
        message,
        type,
        priority,
        isActive,
      },
    });

    res.status(201).json({
      success: true,
      message: "Notification created successfully",
      data: notification,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get all notifications
 * GET /api/notifications
 * Query: ?page=1&limit=10&type=info&active=true
 */
export const getAllNotifications = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, type, active } = req.query;
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);

    // Build filter
    const where = {};
    if (type) {
      where.type = type;
    }
    if (active !== undefined) {
      where.isActive = active === "true";
    }

    // Get total count
    const total = await prisma.notification.count({ where });

    // Get paginated notifications
    const notifications = await prisma.notification.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: (pageNum - 1) * limitNum,
      take: limitNum,
    });

    res.status(200).json({
      success: true,
      message: "Notifications retrieved successfully",
      data: notifications,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        pages: Math.ceil(total / limitNum),
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get single notification by ID
 * GET /api/notifications/:id
 */
export const getNotificationById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const notification = await prisma.notification.findUnique({
      where: { id: parseInt(id) },
    });

    if (!notification) {
      return res.status(404).json({
        success: false,
        message: "Notification not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Notification retrieved successfully",
      data: notification,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update notification
 * PUT /api/notifications/:id
 * Body: { title, message, type, priority, isActive }
 * Requires: JWT token
 */
export const updateNotification = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, message, type, priority, isActive } = req.body;

    // Build update data
    const updateData = {};
    if (title !== undefined) updateData.title = title;
    if (message !== undefined) updateData.message = message;
    if (type !== undefined) updateData.type = type;
    if (priority !== undefined) updateData.priority = priority;
    if (isActive !== undefined) updateData.isActive = isActive;

    // Update notification
    const notification = await prisma.notification.update({
      where: { id: parseInt(id) },
      data: updateData,
    });

    res.status(200).json({
      success: true,
      message: "Notification updated successfully",
      data: notification,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete notification
 * DELETE /api/notifications/:id
 * Requires: JWT token
 */
export const deleteNotification = async (req, res, next) => {
  try {
    const { id } = req.params;

    const notification = await prisma.notification.delete({
      where: { id: parseInt(id) },
    });

    res.status(200).json({
      success: true,
      message: "Notification deleted successfully",
      data: notification,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get active notifications (for public display)
 * GET /api/notifications/active/list
 * Public endpoint - no auth required
 */
export const getActiveNotifications = async (req, res, next) => {
  try {
    const notifications = await prisma.notification.findMany({
      where: { isActive: true },
      orderBy: { priority: "desc", createdAt: "desc" },
      take: 10,
    });

    res.status(200).json({
      success: true,
      message: "Active notifications retrieved successfully",
      data: notifications,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  createNotification,
  getAllNotifications,
  getNotificationById,
  updateNotification,
  deleteNotification,
  getActiveNotifications,
};
