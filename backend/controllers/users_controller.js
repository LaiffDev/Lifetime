const Users = require("../models/users_model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//welcome message when trying to work with the database using Postman,Insomnia,etc
exports.getWelcome = async (req, res) => {
  res.send("Connection established to API");
};

exports.GetUsers = async (req, res) => {
  try {
    const users = await Users.find().select("-password"); // exclude password
    res.send(users);
  } catch (err) {
    console.error("Error fetching users... : ", err);
    res.status(500).json({ error: err.message });
  }
};

exports.SignUp = async (req, res) => {
  try {
    const { fullname, username, password } = req.body;

    //check if user with the same username already exists
    const existingUser = await Users.findOne({ username });

    if (existingUser) {
      console.log("username exists!");
      return res.status(400).json({ message: "Username already taken" });
    } else {
      const hashed_password = await bcrypt.hash(password, 10);

      const user = new Users({
        fullname,
        username,
        password: hashed_password,
      });

      await user.save();
      res.status(201).json(user);
    }
  } catch (err) {
    console.error("Error saving user... : ", err);
    res.status(500).json({ error: err.message });
  }
};

exports.Login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await Users.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Invalid username" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { username: user.username, _id: user._id },
      process.env.ACCESS_TOKEN,
      { expiresIn: "1d" }
    );

    const userObj = user.toObject();
    delete userObj.password;

    return res.status(200).json({ token, user: userObj });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
