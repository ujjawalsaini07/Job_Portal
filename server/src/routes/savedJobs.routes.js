import express from "express";
import { protect, authorize } from "../middlewares/auth/auth.middleware.js";
import {
  getSavedJobs,
  saveJob,
  unsaveJob,
} from "../controllers/savedJobs.controller.js";

const savedJobsRouter = express.Router();

// -------------------------------------------------------------------------
// Global Protection
// All routes below require a valid JWT token
// -------------------------------------------------------------------------
savedJobsRouter.use(protect);

// -------------------------------------------------------------------------
// Routes
// -------------------------------------------------------------------------

// @desc    Get all saved jobs
// @access  Private (Job Seeker)
savedJobsRouter.get(
  "/",
  authorize("jobseeker"),
  getSavedJobs
);

// @desc    Save a job
// @access  Private (Job Seeker)
savedJobsRouter.post(
  "/",
  authorize("jobseeker"),
  saveJob
);

// @desc    Unsave a job
// @access  Private (Job Seeker)
// Note: :jobId refers to the Job's _id, not the SavedJob document's _id
savedJobsRouter.delete(
  "/:jobId",
  authorize("jobseeker"),
  unsaveJob
);

export default savedJobsRouter;