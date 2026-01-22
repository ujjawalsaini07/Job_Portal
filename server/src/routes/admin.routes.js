import express from "express";
import {
  getAllUsers,
  toggleBlockUser,
  getAdminStats,
} from "../controllers/admin-controllers/admin.controller.js";
const router = express.Router();

router.get("/users", getAllUsers);

router.patch("/users/:userId/block", toggleBlockUser);

router.get("/stats", getAdminStats);

export default router;
