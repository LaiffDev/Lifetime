const Users = require("../models/users_model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//welcome message when trying to work with the database using Postman,Insomnia,etc
exports.getWelcome = async (req, res) => {
  res.send("Connection established to API");
};

exports.GetUsers = async (req, res) => {
  try {
    const users = await Users.find(); //get all the users from database
    res.send(users);
  } catch (err) {
    console.error("Error fetching users... : ", err);
    res.status(500).json({ error: err.message });
  }
};

exports.SignUp = async (req, res) => {
  try {
    const { fullname, username, password } = req.body;
    const hashed_password = await bcrypt.hash(password, 10);

    const user = new Users({
      fullname,
      username,
      password: hashed_password,
    });
    await user.save();

    res.status(201).json(user);
  } catch (err) {
    console.error("Error saving user... : ", err);
    res.status(500).json({ error: err.message });
  }
};

exports.Login = async (req, res) => {
  const { username, password } = req.body;

  const user = await Users.findOne({ username });
  if (!user) {
    res.status(401).json({ message: "invalid username" });
  }

  const passwordMatch = bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    res.status(401).json({ message: "Invalid password" });
  }

  const token = jwt.sign({ username: user.username }, process.env.ACCESS_TOKEN);

  return res.status(200).json({ token: token, user: user });
};
