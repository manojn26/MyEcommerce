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
    isSeller: { type: Boolean, default: false, required: true },
    seller: {
      name: String,
      logo: String,
      description: String,
      rating: { type: Number, default: 0, required: true },
      numReviews: { type: Number, default: 0, required: true },
    },
  },
  // these are options
  {
    timestamps: true,
  }
);

// model based for above
const User = mongoose.model("User", userSchema);
export default User;
