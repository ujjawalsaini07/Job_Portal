import express from "express";
import { protect, authorize } from "../middlewares/auth/auth.middleware.js";
import {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/jobcategories.controller.js";

const jobCategoryRouter = express.Router();

// -------------------------------------------------------------------------
// Public Routes
// Accessible by anyone (even without login)
// -------------------------------------------------------------------------

// @desc    Get all categories (supports query params: ?view=tree, ?parentId=..., ?q=...)
// @access  Public
jobCategoryRouter.get("/", getAllCategories);

// -------------------------------------------------------------------------
// Protected Routes
// Require Login + 'admin' Role
// -------------------------------------------------------------------------

// @desc    Create category
// @access  Private (Admin)
jobCategoryRouter.post(
  "/",
  protect,
  authorize("admin"),
  createCategory
);

// @desc    Update category
// @access  Private (Admin)
jobCategoryRouter.put(
  "/:id",
  protect,
  authorize("admin"),
  updateCategory
);

// @desc    Delete category
// @access  Private (Admin)
jobCategoryRouter.delete(
  "/:id",
  protect,
  authorize("admin"),
  deleteCategory
);

export default jobCategoryRouter;