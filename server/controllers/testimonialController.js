// controllers/testimonialController.js
// Testimonial management controllers

import { getPrismaClient } from "../config/database.js";
import { parseBoolean } from "../utils/helpers.js";

const prisma = getPrismaClient();

export const createTestimonial = async (req, res, next) => {
  try {
    const { name, message, course, approved = false } = req.body;

    const testimonial = await prisma.testimonial.create({
      data: {
        name,
        message,
        course,
        approved: parseBoolean(approved, false),
      },
    });

    res.status(201).json({
      success: true,
      message: "Testimonial submitted successfully",
      data: testimonial,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllTestimonials = async (req, res, next) => {
  try {
    const { approved } = req.query;
    const where = {};

    if (approved !== undefined) {
      where.approved = approved === "true";
    } else {
      where.approved = true;
    }

    const testimonials = await prisma.testimonial.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    res.status(200).json({
      success: true,
      message: "Testimonials retrieved successfully",
      data: testimonials,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllTestimonialsAdmin = async (req, res, next) => {
  try {
    const testimonials = await prisma.testimonial.findMany({
      orderBy: { createdAt: "desc" },
    });

    res.status(200).json({
      success: true,
      message: "Testimonials retrieved successfully",
      data: testimonials,
    });
  } catch (error) {
    next(error);
  }
};

export const updateTestimonial = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, message, course, approved } = req.body;

    const updateData = {};
    if (name !== undefined) updateData.name = name;
    if (message !== undefined) updateData.message = message;
    if (course !== undefined) updateData.course = course;
    if (approved !== undefined) updateData.approved = parseBoolean(approved);

    const testimonial = await prisma.testimonial.update({
      where: { id: parseInt(id) },
      data: updateData,
    });

    res.status(200).json({
      success: true,
      message: "Testimonial updated successfully",
      data: testimonial,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteTestimonial = async (req, res, next) => {
  try {
    const { id } = req.params;

    const testimonial = await prisma.testimonial.delete({
      where: { id: parseInt(id) },
    });

    res.status(200).json({
      success: true,
      message: "Testimonial deleted successfully",
      data: testimonial,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  createTestimonial,
  getAllTestimonials,
  getAllTestimonialsAdmin,
  updateTestimonial,
  deleteTestimonial,
};
