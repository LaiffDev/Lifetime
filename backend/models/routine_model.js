const mongoose = require("mongoose");
const { Schema } = mongoose;

const routineSchema = new Schema(
  {
    day: String,
    time: String,
    routine: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, //uses the user's id as a primary key to reference to the routines of the user
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Routine", routineSchema);
