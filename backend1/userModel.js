import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  class1: {
    type: Number,
    required: true,
  },
  roll: {
    type: String,
    required: true,
  },
});

export default mongoose.model("User", userSchema);
