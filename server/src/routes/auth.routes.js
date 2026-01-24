import express from "express";
import {
  register,
  login,
  logout,
  verifyEmail,
  forgotPassword,
  resetPassword,
  getCurrentUser,
  refreshToken
} from "../controllers/auth.controller.js";
import { protect } from "../middlewares/auth/auth.middleware.js";
const authrouter = express.Router();

authrouter.post("/register", register);
authrouter.post("/login", login);
authrouter.post("/logout",protect ,logout);
authrouter.post("/refresh-token", refreshToken);
authrouter.post("/verify-email", verifyEmail);
authrouter.post("/forgot-password", forgotPassword);
authrouter.post("/reset-password", resetPassword);
authrouter.get("/me", protect, getCurrentUser);

export default authrouter;
