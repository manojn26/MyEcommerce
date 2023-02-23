// create mongoose model

import mongoose from "mongoose";

// define mongoose schema
const userSchema = new mongoose.Schema(
  {
    // these are fields
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
  },
  // these are options
  {
    timestamps: true,
  }
);

// model based for above
const User = mongoose.model("User", userSchema);
export default User;
