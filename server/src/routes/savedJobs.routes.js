import e from "express";
import {
  getSavedJobs,
  saveJob,
  unsaveJob,
} from "../controllers/savedJobs.controller.js";
const saveJobsRouter = e.Router();

saveJobsRouter.get("/", getSavedJobs);
saveJobsRouter.post("/", saveJob);
saveJobsRouter.delete("/:jobId", unsaveJob);

export default saveJobsRouter;
