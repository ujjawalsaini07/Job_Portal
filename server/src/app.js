import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import recruiterRoutes from "./routes/recruiter.routes.js";
import { protect } from "./middlewares/auth.middleware.js";
import { authorize } from "./middlewares/role.middleware.js";


const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);

app.use(cookieParser());
app.use(express.json());

// to log the request 
app.use((req,res,next) => {
  console.log(`request ${req.url}`);
  next();
})

app.use("/api/v1/auth", authRoutes);

app.use(protect); // ROUTES BELOW ARE PROTECTED 

app.use("/api/v1/admin",authorize('ADMIN'),adminRoutes);  

app.use("/api/v1/recruiter" ,authorize('RECRUITER'),recruiterRoutes)



export default app;
