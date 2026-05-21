// controllers/facultyController.js
// Faculty management controllers

import { getPrismaClient } from "../config/database.js";
import { getFileUrl, parseBoolean } from "../utils/helpers.js";

const prisma = getPrismaClient();

/**
 * Create new faculty member
 * POST /api/faculty
 * Body: { name, role, email, phone, department, bio }
 * File: image (optional)
 * Requires: JWT token
 */
export const createFaculty = async (req, res, next) => {
  try {
    const { name, role, email, phone, department, bio } = req.body;
    const image = req.file ? getFileUrl(req.file.filename) : null;

    // Create faculty
    const faculty = await prisma.faculty.create({
      data: {
        name,
        role,
        email: email || null,
        phone: phone || null,
        department: department || null,
        image,
        bio: bio || null,
        isActive: parseBoolean(req.body.isActive, true),
      },
    });

    res.status(201).json({
      success: true,
      message: "Faculty member created successfully",
      data: faculty,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get all faculty members
 * GET /api/faculty
 * Query: ?page=1&limit=10&department=CSE&active=true
 */
export const getAllFaculty = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, department, active } = req.query;
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);

    // Build filter
    const where = {};
    if (department) {
      where.department = department;
    }
    if (active !== undefined) {
      where.isActive = active === "true";
    }

    // Get total count
    const total = await prisma.faculty.count({ where });

    // Get paginated faculty
    const faculty = await prisma.faculty.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: (pageNum - 1) * limitNum,
      take: limitNum,
    });

    res.status(200).json({
      success: true,
      message: "Faculty members retrieved successfully",
      data: faculty,
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
 * Get single faculty member by ID
 * GET /api/faculty/:id
 */
export const getFacultyById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const faculty = await prisma.faculty.findUnique({
      where: { id: parseInt(id) },
    });

    if (!faculty) {
      return res.status(404).json({
        success: false,
        message: "Faculty member not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Faculty member retrieved successfully",
      data: faculty,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update faculty member
 * PUT /api/faculty/:id
 * Body: { name, role, email, phone, department, bio, isActive }
 * File: image (optional)
 * Requires: JWT token
 */
export const updateFaculty = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, role, email, phone, department, bio, isActive } = req.body;

    // Build update data
    const updateData = {};
    if (name !== undefined) updateData.name = name;
    if (role !== undefined) updateData.role = role;
    if (email !== undefined) updateData.email = email;
    if (phone !== undefined) updateData.phone = phone;
    if (department !== undefined) updateData.department = department;
    if (bio !== undefined) updateData.bio = bio;
    if (isActive !== undefined) updateData.isActive = parseBoolean(isActive);
    if (req.file) {
      updateData.image = getFileUrl(req.file.filename);
    }

    // Update faculty
    const faculty = await prisma.faculty.update({
      where: { id: parseInt(id) },
      data: updateData,
    });

    res.status(200).json({
      success: true,
      message: "Faculty member updated successfully",
      data: faculty,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete faculty member
 * DELETE /api/faculty/:id
 * Requires: JWT token
 */
export const deleteFaculty = async (req, res, next) => {
  try {
    const { id } = req.params;

    const faculty = await prisma.faculty.delete({
      where: { id: parseInt(id) },
    });

    res.status(200).json({
      success: true,
      message: "Faculty member deleted successfully",
      data: faculty,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get active faculty members by department (public)
 * GET /api/faculty/department/:department
 * Returns only active faculty in specified department
 */
export const getFacultyByDepartment = async (req, res, next) => {
  try {
    const { department } = req.params;

    const faculty = await prisma.faculty.findMany({
      where: {
        department,
        isActive: true,
      },
      orderBy: { name: "asc" },
    });

    res.status(200).json({
      success: true,
      message: "Faculty members retrieved successfully",
      data: faculty,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get all active faculty members (public)
 * GET /api/faculty/active/all
 */
export const getActiveFaculty = async (req, res, next) => {
  try {
    const faculty = await prisma.faculty.findMany({
      where: {
        isActive: true,
      },
      orderBy: { name: "asc" },
    });

    res.status(200).json({
      success: true,
      message: "Faculty members retrieved successfully",
      data: faculty,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  createFaculty,
  getAllFaculty,
  getFacultyById,
  updateFaculty,
  deleteFaculty,
  getFacultyByDepartment,
  getActiveFaculty,
};
