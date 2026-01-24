import e from "express";

import {
  getMyProfile,
  createProfile,
  updateProfile,
  uploadResume,
  deleteResume,
  uploadVideoResume,
  addPortfolioItem,
  deletePortfolioItem,
  searchJobSeekers,
  getJobSeekerProfileById,
} from "../controllers/jobseeker.controller.js";

const jobseekerRouter = e.Router();

// Profile
jobseekerRouter.get("/profile", getMyProfile);
jobseekerRouter.post("/profile", createProfile);
jobseekerRouter.put("/profile", updateProfile);

// Resume
jobseekerRouter.post("/profile/resume", uploadResume);
jobseekerRouter.delete("/profile/resume", deleteResume);

// Video Resume
jobseekerRouter.post("/profile/video-resume", uploadVideoResume);

// Portfolio
jobseekerRouter.post("/profile/portfolio", addPortfolioItem);
jobseekerRouter.delete("/profile/portfolio/:itemId", deletePortfolioItem);

// Search (for recruiters)
jobseekerRouter.get("/search", searchJobSeekers);

// Public jobseeker profile
jobseekerRouter.get("/:id/profile", getJobSeekerProfileById);

export default jobseekerRouter;
