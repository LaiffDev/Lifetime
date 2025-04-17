"use strict";
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const usersController = require("./controllers/users_controller");
require("dotenv").config();

const app = express();
const port = process.env.PORT;
const mongo_uri = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());

mongoose
  .connect(mongo_uri)
  .then(() => console.log("Connected successfully to MongoDB"))
  .catch((err) => console.error("Error with connection.. : ", err));

//ENDPOINTS FOR USERS
//routes are handled directly here
app.get("/", usersController.getWelcome);
app.post("/sign-up", usersController.SignUp);

//if using controllers, routes must be mapped to them

app.listen(port || 3000, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
