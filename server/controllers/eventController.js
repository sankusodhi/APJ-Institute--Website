// controllers/eventController.js
// Event management controllers

import { getPrismaClient } from "../config/database.js";
import { getFileUrl, parseBoolean } from "../utils/helpers.js";
import { getIO } from '../socket.js';

const prisma = getPrismaClient();

/**
 * Create new event
 * POST /api/events
 * Body: { title, description, date, location, image }
 * File: image (optional)
 * Requires: JWT token
 */
export const createEvent = async (req, res, next) => {
  try {
    const { title, description, date, location } = req.body;
    const image = req.file ? getFileUrl(req.file.filename) : null;

    // Create event
    const event = await prisma.event.create({
      data: {
        title,
        description,
        date: new Date(date),
        location,
        image,
        isActive: parseBoolean(req.body.isActive, true),
      },
    });

    res.status(201).json({
      success: true,
      message: "Event created successfully",
      data: event,
    });
    try {
      const io = getIO();
      if (io) io.emit('new_event', event);
    } catch (e) {}
  } catch (error) {
    next(error);
  }
};

/**
 * Get all events
 * GET /api/events
 * Query: ?page=1&limit=10&active=true
 */
export const getAllEvents = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, active } = req.query;
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);

    // Build filter
    const where = {};
    if (active !== undefined) {
      where.isActive = active === "true";
    }

    // Get total count
    const total = await prisma.event.count({ where });

    // Get paginated events
    const events = await prisma.event.findMany({
      where,
      orderBy: { date: "asc" },
      skip: (pageNum - 1) * limitNum,
      take: limitNum,
    });

    res.status(200).json({
      success: true,
      message: "Events retrieved successfully",
      data: events,
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
 * Get single event by ID
 * GET /api/events/:id
 */
export const getEventById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const event = await prisma.event.findUnique({
      where: { id: parseInt(id) },
    });

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Event retrieved successfully",
      data: event,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update event
 * PUT /api/events/:id
 * Body: { title, description, date, location, isActive }
 * File: image (optional)
 * Requires: JWT token
 */
export const updateEvent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, date, location, isActive } = req.body;

    // Build update data
    const updateData = {};
    if (title !== undefined) updateData.title = title;
    if (description !== undefined) updateData.description = description;
    if (date !== undefined) updateData.date = new Date(date);
    if (location !== undefined) updateData.location = location;
    if (isActive !== undefined) updateData.isActive = parseBoolean(isActive);
    if (req.file) {
      updateData.image = getFileUrl(req.file.filename);
    }

    // Update event
    const event = await prisma.event.update({
      where: { id: parseInt(id) },
      data: updateData,
    });

    res.status(200).json({
      success: true,
      message: "Event updated successfully",
      data: event,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete event
 * DELETE /api/events/:id
 * Requires: JWT token
 */
export const deleteEvent = async (req, res, next) => {
  try {
    const { id } = req.params;

    const event = await prisma.event.delete({
      where: { id: parseInt(id) },
    });

    res.status(200).json({
      success: true,
      message: "Event deleted successfully",
      data: event,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get upcoming events (public endpoint)
 * GET /api/events/upcoming/list
 * Returns only active, future events
 */
export const getUpcomingEvents = async (req, res, next) => {
  try {
    const now = new Date();
    const limit = parseInt(req.query.limit) || 10;

    const events = await prisma.event.findMany({
      where: {
        isActive: true,
        date: {
          gte: now,
        },
      },
      orderBy: { date: "asc" },
      take: limit,
    });

    res.status(200).json({
      success: true,
      message: "Upcoming events retrieved successfully",
      data: events,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
  getUpcomingEvents,
};
