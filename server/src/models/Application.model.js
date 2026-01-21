import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema(
  {
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },

    candidateId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    resumeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resume",
      required: true,
    },

    matchScore: {
      type: Number,
      min: 0,
      max: 100,
    },

    status: {
      type: String,
      enum: ["APPLIED", "SHORTLISTED", "REJECTED"],
      default: "APPLIED",
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

ApplicationSchema.index({ jobId: 1, candidateId: 1 });


export default mongoose.model("Application", ApplicationSchema);

