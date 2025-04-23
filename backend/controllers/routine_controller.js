const Routines = require("../models/routine_model");

exports.GetRoutines = async (req, res) => {
  try {
    const userId = req.user._id;
    const routines = await Routines.find({ user: userId });
    res.send(routines);
  } catch (err) {
    console.error("Error fetching routines... : ", err);
    res.status(500).json({ error: err.message });
  }
};

exports.SaveRoutine = async (req, res) => {
  try {
    const { day, time, routine } = req.body;
    const userId = req.user._id;

    const routineBlock = new Routines({
      day,
      time,
      routine,
      user: userId,
    });

    await routineBlock.save();
    res.status(201).json(routineBlock);
  } catch (err) {
    console.error("Error saving routine... : ", err);
    res.status(500).json({ error: err.message });
  }
};
