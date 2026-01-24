import e from "express";

const applicationRouter = e.Router();


// Applications
applicationRouter.post("/", applyToJob);

applicationRouter.get("/my-applications", getMyApplications);
applicationRouter.get("/job/:jobId", getApplicationsForJob);
applicationRouter.get("/:id", getApplicationById);

applicationRouter.patch("/:id/withdraw", withdrawApplication);
applicationRouter.patch("/:id/status", updateApplicationStatus);

applicationRouter.post("/:id/notes", addRecruiterNote);
applicationRouter.patch("/:id/rating", rateCandidate);

applicationRouter.post("/:id/schedule-interview", scheduleInterview);


export default applicationRouter;