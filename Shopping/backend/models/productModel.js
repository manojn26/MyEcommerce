// create mongoose model

import mongoose from "mongoose";

// define mongoose schema
const productSchema = new mongoose.Schema(
  {
    // these are fields
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    descriptions: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
  },
  // these are options
  {
    timestamps: true,
  }
);

// model based for above
const Product = mongoose.model("Product", productSchema);
export default Product;
