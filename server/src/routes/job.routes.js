import e from "express";
import {
  getAllJobs,
  searchJobs,
  getRecommendedJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
  closeJob,
  getMyJobs,
  trackJobView,
} from "../controllers/job.controller.js";
const jobRouter = e.Router();

// Public jobs
jobRouter.get("/", getAllJobs);
jobRouter.get("/search", searchJobs);
jobRouter.get("/recommended", getRecommendedJobs);
jobRouter.get("/:id", getJobById);

// Recruiter actions
jobRouter.post("/", createJob);
jobRouter.put("/:id", updateJob);
jobRouter.delete("/:id", deleteJob);
jobRouter.patch("/:id/close", closeJob);

// Recruiter jobs
jobRouter.get("/my-jobs", getMyJobs);

// Analytics
jobRouter.post("/:id/view", trackJobView);

export default jobRouter;
