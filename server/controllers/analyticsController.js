// controllers/analyticsController.js
// Dashboard analytics controllers

import { getPrismaClient } from "../config/database.js";

const prisma = getPrismaClient();

export const getDashboardAnalytics = async (req, res, next) => {
  try {
    const [inquiries, notifications, events, gallery, faculty, courses, testimonials, faqs, approvedTestimonials, pendingTestimonials] = await Promise.all([
      prisma.inquiry.count(),
      prisma.notification.count(),
      prisma.event.count(),
      prisma.gallery.count(),
      prisma.faculty.count(),
      prisma.course.count(),
      prisma.testimonial.count(),
      prisma.FAQ.count(),
      prisma.testimonial.count({ where: { approved: true } }),
      prisma.testimonial.count({ where: { approved: false } }),
    ]);

    res.status(200).json({
      success: true,
      message: "Analytics retrieved successfully",
      data: {
        inquiries,
        notifications,
        events,
        gallery,
        faculty,
        courses,
        testimonials,
        faqs,
        approvedTestimonials,
        pendingTestimonials,
      },
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getDashboardAnalytics,
};
