import { timeStamp } from "console";
import mongoose from "mongoose";

const catagorySchema = new mongoose.Schema({
  name: {
    type: String,
  }
}, {
  timestamps: true
}
)

export default mongoose.model("catagoryModel", catagorySchema)