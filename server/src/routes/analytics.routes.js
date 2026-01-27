import express from "express";
import { protect, authorize } from "../middlewares/auth/auth.middleware.js";
import {
  getRecruiterDashboardAnalytics,
  getJobPerformanceMetrics,
  getAdminDashboardAnalytics,
  getUserAnalytics,
  getJobAnalytics,
} from "../controllers/analytics.controller.js";

const analyticsRouter = express.Router();

// -------------------------------------------------------------------------
// Global Protection
// All analytics routes require a valid token
// -------------------------------------------------------------------------
analyticsRouter.use(protect);

// -------------------------------------------------------------------------
// Recruiter Routes
// -------------------------------------------------------------------------

// @desc    Get recruiter overview
// @access  Private (Recruiter)
analyticsRouter.get(
  "/recruiter/dashboard",
  authorize("recruiter"),
  getRecruiterDashboardAnalytics
);

// @desc    Get specific job performance (views, apps, etc.)
// @access  Private (Recruiter Owner)
analyticsRouter.get(
  "/recruiter/job/:jobId",
  authorize("recruiter"),
  getJobPerformanceMetrics
);

// -------------------------------------------------------------------------
// Admin Routes
// -------------------------------------------------------------------------

// @desc    Get platform-wide dashboard
// @access  Private (Admin)
analyticsRouter.get(
  "/admin/dashboard",
  authorize("admin"),
  getAdminDashboardAnalytics
);

// @desc    Get user growth statistics
// @access  Private (Admin)
analyticsRouter.get(
  "/admin/users",
  authorize("admin"),
  getUserAnalytics
);

// @desc    Get job statistics (categories, status)
// @access  Private (Admin)
analyticsRouter.get(
  "/admin/jobs",
  authorize("admin"),
  getJobAnalytics
);

export default analyticsRouter;