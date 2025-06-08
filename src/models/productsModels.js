import mongoose from "mongoose";
import { type } from "os";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    default: 0
  },
  active: {
    type: Boolean,
    default: true
  },
  catagory: {
    type: String,
    enum: ["food", "electronics", "vegetable"]
  },
}, {
  timestamps: true,
}
)

export default mongoose.model("ProductModel", productSchema);

