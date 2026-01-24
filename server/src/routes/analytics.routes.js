import e from "express";
import {
  getRecruiterDashboardAnalytics,
  getJobPerformanceMetrics,
  getAdminDashboardAnalytics,
  getUserAnalytics,
  getJobAnalytics,
} from "../controllers/analytics.controller.js";
const analyticsRouter = e.Router();

// Recruiter analytics
analyticsRouter.get("/recruiter/dashboard", getRecruiterDashboardAnalytics);
analyticsRouter.get("/recruiter/job/:jobId", getJobPerformanceMetrics);

// Admin analytics
analyticsRouter.get("/admin/dashboard", getAdminDashboardAnalytics);
analyticsRouter.get("/admin/users", getUserAnalytics);
analyticsRouter.get("/admin/jobs", getJobAnalytics);

export default analyticsRouter;
