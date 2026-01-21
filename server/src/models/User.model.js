import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: { type: String, select: false },
    role: {
      type: String,
      enum: ["CANDIDATE", "RECRUITER", "ADMIN"],
      default: "CANDIDATE",
    },
  },
  { timestamps: true }
);

/* Hash password before save */
UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 10);
});

/* Compare password */
UserSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model("User", UserSchema);
