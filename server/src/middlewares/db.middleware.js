import mongoose from 'mongoose';
import connectDB from '../config/db.js';

export const dbConnectionMiddleware = async (req, res, next) => {
  try {
    // Check if we are connected (readyState 1 = connected)
    if (mongoose.connection.readyState !== 1) {
      console.log(`🔌 Middleware: Database not connected (State: ${mongoose.connection.readyState}). connectDB() called...`);
      await connectDB();
    }

    // Strict Double-Check
    if (mongoose.connection.readyState !== 1) {
        console.warn("⚠️ Middleware: Connection not ready after connectDB(). Retrying...");
        // Force retry (db.js will handle clearing cache if state is bad)
        await connectDB();
    }
    
    // Final Check
    if (mongoose.connection.readyState !== 1) {
         console.error("❌ Middleware: Failed to connect to DB.");
         return res.status(500).json({
            success: false,
            message: "Database Connection Failed"
        });
    }

    next();
  } catch (error) {
    console.error("❌ Middleware DB Error:", error);
    res.status(500).json({
        success: false, 
        message: "Internal Server Error (DB)",
        error: error.message
    });
  }
};
