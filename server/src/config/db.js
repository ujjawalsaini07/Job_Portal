import mongoose from 'mongoose';

const MONGO_URI = process.env.NODE_ENV === "production"
  ? process.env.MONGO_URI
  : process.env.MONGO_URI_DEV;

if (!MONGO_URI) {
  throw new Error(
    'Please define the MONGO_URI environment variable inside .env.local'
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  // Check the current Mongoose state directly
  if (mongoose.connection.readyState === 1) {
    return mongoose;
  }

  // If disconnected (0) or uninitialized (99), reset cache
  if (mongoose.connection.readyState === 0 || mongoose.connection.readyState === 99) {
    console.log("⚠️ MongoDB State is", mongoose.connection.readyState, "- Starting new connection...");
    cached.promise = null;
    cached.conn = null;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGO_URI, opts).then((mongoose) => {
      console.log('✅ New MongoDB Connection Established');
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    console.error("❌ MongoDB Connection Error:", e);
    throw e;
  }

  return cached.conn;
}

export default connectDB;