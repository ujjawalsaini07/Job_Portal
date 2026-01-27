import express from "express";
import { protect, authorize } from "../middlewares/auth/auth.middleware.js"; // Adjust path as needed
import {
  applyToJob,
  getMyApplications,
  getApplicationsForJob,
  getApplicationById,
  withdrawApplication,
  updateApplicationStatus,
  addRecruiterNote,
  rateCandidate,
  scheduleInterview,
} from "../controllers/applications.controller.js";

const applicationRouter = express.Router();

// -------------------------------------------------------------------------
// Global Protection
// All routes below require a valid JWT token
// -------------------------------------------------------------------------
applicationRouter.use(protect);

// -------------------------------------------------------------------------
// Job Seeker Routes
// -------------------------------------------------------------------------

// Apply to a job
// Role: Job Seeker
applicationRouter.post(
  "/",
  authorize("job_seeker"), 
  applyToJob
);

// Get current user's applications
// Role: Job Seeker
applicationRouter.get(
  "/my-applications",
  authorize("job_seeker"), 
  getMyApplications
);

// Withdraw an application
// Role: Job Seeker (Owner of application)
applicationRouter.patch(
  "/:id/withdraw",
  authorize("job_seeker"), 
  withdrawApplication
);

// -------------------------------------------------------------------------
// Recruiter Routes
// -------------------------------------------------------------------------

// Get all applications for a specific job
// Role: Recruiter (Owner of the job)
applicationRouter.get(
  "/job/:jobId",
  authorize("recruiter"), 
  getApplicationsForJob
);

// Update application status (e.g., shortlisted, rejected)
// Role: Recruiter
applicationRouter.patch(
  "/:id/status",
  authorize("recruiter"), 
  updateApplicationStatus
);

// Add private notes to an application
// Role: Recruiter
applicationRouter.post(
  "/:id/notes",
  authorize("recruiter"), 
  addRecruiterNote
);

// Rate a candidate
// Role: Recruiter
applicationRouter.patch(
  "/:id/rating",
  authorize("recruiter"), 
  rateCandidate
);

// Schedule an interview
// Role: Recruiter
applicationRouter.post(
  "/:id/schedule-interview",
  authorize("recruiter"), 
  scheduleInterview
);

// -------------------------------------------------------------------------
// Shared Routes
// -------------------------------------------------------------------------

// Get specific application details
// Role: Recruiter (viewing candidate) OR Job Seeker (viewing their own)
applicationRouter.get(
  "/:id",
  authorize("recruiter", "job_seeker"), 
  getApplicationById
);

export default applicationRouter;