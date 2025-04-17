const User = require("../models/users_model");
const bcrypt = require("bcrypt");

//welcome message when trying to work with the database using Postman,Insomnia,etc
exports.getWelcome = async (req, res) => {
  res.send("Connection established... Welcome");
  console.log("Database is being connected...");
};

exports.SignUp = async (req, res) => {
  try {
    const { fullname, username, password } = req.body;
    const hashed_password = await bcrypt.hash(password, 10);

    const user = new User({
      fullname,
      username,
      password: hashed_password,
    });

    await user.save();
    console.log("User saved :", user);

    res.status(201).json(user);
  } catch (err) {
    console.error("Error saving user... : ", err);
    res.status(500).json({ error: err.message });
  }
};
