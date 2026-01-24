import e from "express";
import {
  getMyCompanyProfile,
  createCompanyProfile,
  updateCompanyProfile,
  uploadCompanyLogo,
  uploadCompanyBanner,
  getVerificationStatus,
  getCompanyProfileById,
} from "../controllers/recruiter.controller.js";

const recruiterRouter = e.Router();

// Company Profile
recruiterRouter.get("/profile", getMyCompanyProfile);
recruiterRouter.post("/profile", createCompanyProfile);
recruiterRouter.put("/profile", updateCompanyProfile);

// Company Media
recruiterRouter.post("/profile/logo", uploadCompanyLogo);
recruiterRouter.post("/profile/banner", uploadCompanyBanner);

// Verification
recruiterRouter.get("/verification-status", getVerificationStatus);

// Public Company Profile
recruiterRouter.get("/:id/profile", getCompanyProfileById);


export default recruiterRouter;
