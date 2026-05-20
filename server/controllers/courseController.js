// controllers/courseController.js
// Course management controllers

import { getPrismaClient } from "../config/database.js";
import { getFileUrl, slugify, parseBoolean } from "../utils/helpers.js";

const prisma = getPrismaClient();

async function buildUniqueSlug(title, currentId = null) {
  const baseSlug = slugify(title);
  let candidate = baseSlug;
  let counter = 2;

  while (true) {
    const existing = await prisma.course.findFirst({
      where: {
        slug: candidate,
        ...(currentId ? { NOT: { id: currentId } } : {}),
      },
    });

    if (!existing) {
      return candidate;
    }

    candidate = `${baseSlug}-${counter}`;
    counter += 1;
  }
}

export const createCourse = async (req, res, next) => {
  try {
    const { title, duration, eligibility, description, slug } = req.body;
    const image = req.file ? getFileUrl(req.file.filename) : null;
    const finalSlug = slug ? slugify(slug) : await buildUniqueSlug(title);

    const course = await prisma.course.create({
      data: {
        title,
        slug: finalSlug,
        duration,
        eligibility,
        description,
        image,
      },
    });

    res.status(201).json({
      success: true,
      message: "Course created successfully",
      data: course,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllCourses = async (req, res, next) => {
  try {
    const courses = await prisma.course.findMany({
      orderBy: { createdAt: "desc" },
    });

    res.status(200).json({
      success: true,
      message: "Courses retrieved successfully",
      data: courses,
    });
  } catch (error) {
    next(error);
  }
};

export const getCourseById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const course = await prisma.course.findUnique({
      where: { id: parseInt(id) },
    });

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Course retrieved successfully",
      data: course,
    });
  } catch (error) {
    next(error);
  }
};

export const getCourseBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;

    const course = await prisma.course.findUnique({
      where: { slug },
    });

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Course retrieved successfully",
      data: course,
    });
  } catch (error) {
    next(error);
  }
};

export const updateCourse = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, duration, eligibility, description, slug } = req.body;
    const currentId = parseInt(id);

    const updateData = {};
    if (title !== undefined) updateData.title = title;
    if (duration !== undefined) updateData.duration = duration;
    if (eligibility !== undefined) updateData.eligibility = eligibility;
    if (description !== undefined) updateData.description = description;
    if (req.file) updateData.image = getFileUrl(req.file.filename);

    if (title || slug) {
      updateData.slug = await buildUniqueSlug(slug || title, currentId);
    }

    const course = await prisma.course.update({
      where: { id: currentId },
      data: updateData,
    });

    res.status(200).json({
      success: true,
      message: "Course updated successfully",
      data: course,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteCourse = async (req, res, next) => {
  try {
    const { id } = req.params;

    const course = await prisma.course.delete({
      where: { id: parseInt(id) },
    });

    res.status(200).json({
      success: true,
      message: "Course deleted successfully",
      data: course,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  createCourse,
  getAllCourses,
  getCourseById,
  getCourseBySlug,
  updateCourse,
  deleteCourse,
};
