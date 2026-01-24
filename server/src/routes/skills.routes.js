import e from "express";

import {
  getAllSkills,
  searchSkills,
  createSkill,
  updateSkill,
  deleteSkill,
} from "../controllers/skills.controller.js";

const skillsRouter = e.Router();

// Skills
skillsRouter.get("/", getAllSkills);
skillsRouter.get("/search", searchSkills);

skillsRouter.post("/", createSkill);
skillsRouter.put("/:id", updateSkill);
skillsRouter.delete("/:id", deleteSkill);

export default skillsRouter;
