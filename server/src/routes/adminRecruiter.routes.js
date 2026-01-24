import e from "express";

import {
  getPendingVerification,
  verifyRecruiter,
  rejectRecruiter,
} from "../controllers/adminRecruiter.controller.js";

const adminRecruiterRouter = e.Router();

adminRecruiterRouter.get("/pending", getPendingVerification);
adminRecruiterRouter.patch("/:id/verify", verifyRecruiter);
adminRecruiterRouter.patch("/:id/reject", rejectRecruiter);

export default adminRecruiterRouter;
