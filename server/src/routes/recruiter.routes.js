import express from "express";
import { addJob } from "../controllers/recruiter.controller.js";
const router = express.Router();

router.post("/job-post", addJob);

export default router;
