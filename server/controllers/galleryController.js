// controllers/galleryController.js
// Gallery management controllers for image uploads

import { getPrismaClient } from "../config/database.js";
import { getFileUrl } from "../utils/helpers.js";

const prisma = getPrismaClient();

/**
 * Upload gallery image
 * POST /api/gallery
 * Body: { title, category }
 * File: image (required)
 * Requires: JWT token
 */
export const uploadGalleryImage = async (req, res, next) => {
  try {
    const { title, category } = req.body;

    // Check if file is uploaded
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No image file provided",
      });
    }

    // Create gallery entry
    const gallery = await prisma.gallery.create({
      data: {
        title,
        image: getFileUrl(req.file.filename),
        category: category || null,
        isActive: true,
      },
    });

    res.status(201).json({
      success: true,
      message: "Image uploaded successfully",
      data: gallery,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get all gallery images
 * GET /api/gallery
 * Query: ?page=1&limit=10&category=campus&active=true
 */
export const getAllGalleryImages = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, category, active } = req.query;
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);

    // Build filter
    const where = {};
    if (category) {
      where.category = category;
    }
    if (active !== undefined) {
      where.isActive = active === "true";
    }

    // Get total count
    const total = await prisma.gallery.count({ where });

    // Get paginated gallery images
    const images = await prisma.gallery.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: (pageNum - 1) * limitNum,
      take: limitNum,
    });

    res.status(200).json({
      success: true,
      message: "Gallery images retrieved successfully",
      data: images,
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
 * Get single gallery image by ID
 * GET /api/gallery/:id
 */
export const getGalleryImageById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const image = await prisma.gallery.findUnique({
      where: { id: parseInt(id) },
    });

    if (!image) {
      return res.status(404).json({
        success: false,
        message: "Gallery image not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Gallery image retrieved successfully",
      data: image,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update gallery image
 * PUT /api/gallery/:id
 * Body: { title, category, isActive }
 * File: image (optional)
 * Requires: JWT token
 */
export const updateGalleryImage = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, category, isActive } = req.body;

    // Build update data
    const updateData = {};
    if (title !== undefined) updateData.title = title;
    if (category !== undefined) updateData.category = category;
    if (isActive !== undefined) updateData.isActive = isActive;
    if (req.file) {
      updateData.image = getFileUrl(req.file.filename);
    }

    // Update gallery image
    const image = await prisma.gallery.update({
      where: { id: parseInt(id) },
      data: updateData,
    });

    res.status(200).json({
      success: true,
      message: "Gallery image updated successfully",
      data: image,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete gallery image
 * DELETE /api/gallery/:id
 * Requires: JWT token
 */
export const deleteGalleryImage = async (req, res, next) => {
  try {
    const { id } = req.params;

    const image = await prisma.gallery.delete({
      where: { id: parseInt(id) },
    });

    res.status(200).json({
      success: true,
      message: "Gallery image deleted successfully",
      data: image,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get gallery images by category (public)
 * GET /api/gallery/category/:category
 * Returns only active images in specified category
 */
export const getGalleryByCategory = async (req, res, next) => {
  try {
    const { category } = req.params;
    const limit = parseInt(req.query.limit) || 20;

    const images = await prisma.gallery.findMany({
      where: {
        category,
        isActive: true,
      },
      orderBy: { createdAt: "desc" },
      take: limit,
    });

    res.status(200).json({
      success: true,
      message: "Gallery images retrieved successfully",
      data: images,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  uploadGalleryImage,
  getAllGalleryImages,
  getGalleryImageById,
  updateGalleryImage,
  deleteGalleryImage,
  getGalleryByCategory,
};
