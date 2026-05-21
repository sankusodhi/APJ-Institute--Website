// controllers/faqController.js
// FAQ management controllers

import { getPrismaClient } from "../config/database.js";

const prisma = getPrismaClient();

export const createFAQ = async (req, res, next) => {
  try {
    const { question, answer } = req.body;

    const faq = await prisma.FAQ.create({
      data: {
        question,
        answer,
      },
    });

    res.status(201).json({
      success: true,
      message: "FAQ created successfully",
      data: faq,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllFAQs = async (req, res, next) => {
  try {
    const faqs = await prisma.FAQ.findMany({
      orderBy: { createdAt: "desc" },
    });

    res.status(200).json({
      success: true,
      message: "FAQs retrieved successfully",
      data: faqs,
    });
  } catch (error) {
    next(error);
  }
};

export const getFAQById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const faq = await prisma.FAQ.findUnique({
      where: { id: parseInt(id) },
    });

    if (!faq) {
      return res.status(404).json({
        success: false,
        message: "FAQ not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "FAQ retrieved successfully",
      data: faq,
    });
  } catch (error) {
    next(error);
  }
};

export const updateFAQ = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { question, answer } = req.body;

    const updateData = {};
    if (question !== undefined) updateData.question = question;
    if (answer !== undefined) updateData.answer = answer;

    const faq = await prisma.FAQ.update({
      where: { id: parseInt(id) },
      data: updateData,
    });

    res.status(200).json({
      success: true,
      message: "FAQ updated successfully",
      data: faq,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteFAQ = async (req, res, next) => {
  try {
    const { id } = req.params;

    const faq = await prisma.FAQ.delete({
      where: { id: parseInt(id) },
    });

    res.status(200).json({
      success: true,
      message: "FAQ deleted successfully",
      data: faq,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  createFAQ,
  getAllFAQs,
  getFAQById,
  updateFAQ,
  deleteFAQ,
};
