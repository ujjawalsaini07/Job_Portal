import express from "express";
import { protect, authorize } from "../middlewares/auth/auth.middleware.js";
import {
  contactCandidate,
  sendBroadcastEmail,
} from "../controllers/email.controller.js";

const emailRouter = express.Router();

// -------------------------------------------------------------------------
// Global Protection
// -------------------------------------------------------------------------
emailRouter.use(protect);

// -------------------------------------------------------------------------
// Recruiter Routes
// -------------------------------------------------------------------------

// @desc    Email candidate directly
// @access  Private (Recruiter)
emailRouter.post(
  "/contact-candidate",
  authorize("recruiter"),
  contactCandidate
);

// -------------------------------------------------------------------------
// Admin Routes
// -------------------------------------------------------------------------

// @desc    Send broadcast email
// @access  Private (Admin)
emailRouter.post(
  "/admin/broadcast",
  authorize("admin"),
  sendBroadcastEmail
);

export default emailRouter;