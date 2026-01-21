import express from "express";
import {
  getAllUsers,
  toggleBlockUser,
  getAdminStats
} from "../controllers/admin.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { authorize } from "../middlewares/role.middleware.js";

const router = express.Router();

router.get(
  "/users",
  protect,
  authorize("ADMIN"),
  getAllUsers
);

router.patch(
  "/users/:userId/block",
  protect,
  authorize("ADMIN"),
  toggleBlockUser
);

router.get(
  "/stats",
  protect,
  authorize("ADMIN"),
  getAdminStats
);

export default router;
