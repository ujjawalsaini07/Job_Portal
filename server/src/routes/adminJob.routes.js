import e from "express";

const adminJobRouter = e.Router();

import {
    getPendingJobApprovals,
    approveJob,
    rejectJob,
    featureJob,
    deleteJob,
} from "../controllers/adminJob.controller.js";
adminJobRouter.get("/pending", getPendingJobApprovals);

adminJobRouter.patch("/:id/approve", approveJob);
adminJobRouter.patch("/:id/reject", rejectJob);
adminJobRouter.patch("/:id/feature", featureJob);

adminJobRouter.delete("/:id", deleteJob);



export default adminJobRouter;