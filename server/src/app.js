import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import adminRoutes from "./routes/admin.routes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);

app.use(cookieParser());
app.use(express.json());

app.use("/api/v1/admin", adminRoutes);

app.use("/api/v1/auth", authRoutes);

export default app;
