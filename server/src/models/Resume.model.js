import mongoose from "mongoose";


const ResumeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    fileUrl: {
      type: String,
      required: true,
    },

    parsedText: {
      type: String,
    },

    skills: [String],

    atsScore: {
      type: Number,
      min: 0,
      max: 100,
    },

    missingSkills: [String],

    suggestions: [String],

    status: {
      type: String,
      enum: ["PENDING", "PROCESSED", "FAILED"],
      default: "PENDING",
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

ResumeSchema.index({ userId: 1 });

export default mongoose.model("Resume", ResumeSchema);

