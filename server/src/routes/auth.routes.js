import express from "express";
import {
  register,
  login,
  refreshAccessToken,
  logout,
} from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/logout", logout);
router.get("/refresh", refreshAccessToken);
router.post("/register", register);
router.post("/login", login);

export default router;
