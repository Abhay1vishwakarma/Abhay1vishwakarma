const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "please enter your name ."],
      maxLength: [30, "please enter name less than 30"],
      minLength: [3, "please enter name greater than 3"],
    },
    email: {
      type: String,
      required: [true, "please enter your name ."],
      // unique:true,
      // validate:[validator.isEmail,"please enter a valid email."]
    },
    password: {
      type: String,
      required: [true, "please enter your name ."],
      minLength: [8, "password should be 8 character"],
    },
    blogs: [
      {
        type: mongoose.Types.ObjectId,
        ref: "blog",
      },
    ],
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
