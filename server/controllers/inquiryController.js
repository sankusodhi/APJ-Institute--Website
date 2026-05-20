// controllers/inquiryController.js
// Inquiry management controllers

import { getPrismaClient } from "../config/database.js";
import { getIO } from '../socket.js';

const prisma = getPrismaClient();

/**
 * Create new inquiry
 * POST /api/inquiries
 * Body: { name, email, phone, message }
 */
export const createInquiry = async (req, res, next) => {
  try {
    const { name, email, phone, message } = req.body;

    // Create inquiry
    const inquiry = await prisma.inquiry.create({
      data: {
        name,
        email,
        phone,
        message,
        status: "new",
      },
    });

    res.status(201).json({
      success: true,
      message: "Inquiry submitted successfully",
      data: inquiry,
    });
    try {
      const io = getIO();
      if (io) io.emit('new_inquiry', inquiry);
    } catch (e) {
      // ignore socket errors
    }
  } catch (error) {
    next(error);
  }
};

/**
 * Get all inquiries (admin only)
 * GET /api/inquiries
 * Query: ?page=1&limit=10&status=new
 * Requires: JWT token
 */
export const getAllInquiries = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, status } = req.query;
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);

    // Build filter
    const where = {};
    if (status && ["new", "read", "resolved"].includes(status)) {
      where.status = status;
    }

    // Get total count
    const total = await prisma.inquiry.count({ where });

    // Get paginated inquiries
    const inquiries = await prisma.inquiry.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: (pageNum - 1) * limitNum,
      take: limitNum,
    });

    res.status(200).json({
      success: true,
      message: "Inquiries retrieved successfully",
      data: inquiries,
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
 * Get single inquiry by ID
 * GET /api/inquiries/:id
 * Requires: JWT token
 */
export const getInquiryById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const inquiry = await prisma.inquiry.findUnique({
      where: { id: parseInt(id) },
    });

    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message: "Inquiry not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Inquiry retrieved successfully",
      data: inquiry,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update inquiry status
 * PUT /api/inquiries/:id
 * Body: { status }
 * Requires: JWT token
 */
export const updateInquiry = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // Validate status
    if (status && !["new", "read", "resolved"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status. Must be 'new', 'read', or 'resolved'",
      });
    }

    // Update inquiry
    const inquiry = await prisma.inquiry.update({
      where: { id: parseInt(id) },
      data: {
        status: status || undefined,
      },
    });

    res.status(200).json({
      success: true,
      message: "Inquiry updated successfully",
      data: inquiry,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete inquiry
 * DELETE /api/inquiries/:id
 * Requires: JWT token
 */
export const deleteInquiry = async (req, res, next) => {
  try {
    const { id } = req.params;

    const inquiry = await prisma.inquiry.delete({
      where: { id: parseInt(id) },
    });

    res.status(200).json({
      success: true,
      message: "Inquiry deleted successfully",
      data: inquiry,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete all inquiries (admin only)
 * DELETE /api/inquiries
 * Requires: JWT token
 */
export const deleteAllInquiries = async (req, res, next) => {
  try {
    const result = await prisma.inquiry.deleteMany({});

    res.status(200).json({
      success: true,
      message: `All ${result.count} inquiries deleted successfully`,
      data: { deletedCount: result.count },
    });
  } catch (error) {
    next(error);
  }
};

export default {
  createInquiry,
  getAllInquiries,
  getInquiryById,
  updateInquiry,
  deleteInquiry,
  deleteAllInquiries,
};
