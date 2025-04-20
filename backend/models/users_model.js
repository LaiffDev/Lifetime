const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    fullname: String,
    username: String,
    password: String,
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("User", userSchema);
