import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({

  class1: {
    type: Number,
    required: true,
  },
  roll: {
    type: String,
    required: true,
  },
  exam:{
    type:String,
    required:true,
  },telugu:{
      type: Number,
    required: true,
  },
  hindi:{
      type: Number,
    required: true,
  },
  english:{
      type: Number,
    required: true,
  },maths:{
      type: Number,
    required: true,},

  science:{
      type: Number,
    required: true,
  },
  social:{
      type: Number,
    required: true,
  },


});

export default mongoose.model("Result",resultSchema);
