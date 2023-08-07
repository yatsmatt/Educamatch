// fonctuin structure and pass to routes
const asyncHandler = require("express-async-handler");

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get goals new" });
});

const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add text");
  }
  res.status(200).json({ message: `set goals ${req.body.text}` });
});
//update
const putGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update goals ${req.params.id}` });
});

const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete goals ${req.params.id}` });
});

module.exports = { getGoals, setGoals, putGoals, deleteGoals };
