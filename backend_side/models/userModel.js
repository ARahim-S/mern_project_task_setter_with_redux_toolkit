const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "please add a valid name"],
    },
    email: {
      type: String,
      required: [true, "please add a valid email address"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "please add a valid password"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
