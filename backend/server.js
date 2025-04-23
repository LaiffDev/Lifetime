"use strict";
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//controllers or routes
const usersController = require("./controllers/users_controller");
const routineController = require("./controllers/routine_controller");

//middlewares
const auth = require("./middleware/auth");

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
app.get("/welcome", usersController.getWelcome);
app.get("/users", usersController.GetUsers);
app.post("/sign-up", usersController.SignUp);
app.post("/login", usersController.Login);

//ENDPOINTS FOR ROUTINES
app.get("/routines", auth, routineController.GetRoutines);
app.post("/routine", auth, routineController.SaveRoutine);

//if using controllers, routes must be mapped to them

app.listen(port || 3000, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
