import 'dotenv/config';
import mongoose from 'mongoose';
import app from "./src/app.js";
import connectDB from "./src/config/db.js";
import seedAdmin from "./src/utils/seedAdmin.js";

// REMOVE the global 'isConnected' variable. It is dangerous in serverless.

export default async function handler(req, res) {
  try {
    // Pre-warm the connection (best effort). 
    // The strict check is now handled by the dbConnectionMiddleware in app.js
    await connectDB();

    // Pass the request to the Express app
    return app(req, res);
    
  } catch (error) {
    console.error("Critical Server Error:", error);
    res.status(500).json({ 
      success: false, 
      message: "Server Connection Error", 
      error: error.message 
    });
  }
}