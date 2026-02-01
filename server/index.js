import 'dotenv/config';
import mongoose from 'mongoose';
import app from "./src/app.js";
import connectDB from "./src/config/db.js";
import seedAdmin from "./src/utils/seedAdmin.js";

// REMOVE the global 'isConnected' variable. It is dangerous in serverless.

export default async function handler(req, res) {
  try {
    // ALWAYS call this. connectDB internally handles caching and reconnection.
    await connectDB();
    
    // STRICT CHECK: Verify connection state.
    // In serverless, await connectDB() might resolve while the connection is still "connecting"
    // or if the cached connection was actually dead.
    if (mongoose.connection.readyState !== 1) {
      console.log(`⚠️ Main Handler: Connection state is ${mongoose.connection.readyState}. Retrying...`);
      // Force a second attempt. Our db.js logic will reset the cache if state is 0.
      await connectDB();
    }
    
    // Optional: Run this only if absolutely necessary on every request.
    // Ideally, run this once manually or as a separate build step.
    // await seedAdmin(); 

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