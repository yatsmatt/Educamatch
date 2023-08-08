const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../model/userModel");
const asyncHandler = require("express-async-handler");

const regiserUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("somting is missing");
  }
  const userExiste = await User.findOne({ email });
  if (userExiste) {
    res.status(400);
    throw new Error("user all ready existe");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(password, salt);

  const user = await User.create({ name, email, password: hashedpassword });

  if (user) {
    satpos(res, user);
  } else {
    res.status(400);
    throw new Error("user invalid data");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    satpos(res, user);
  } else {
    res.status(400);
    throw new Error("one or many details are invalids");
  }
});

const getUserData = asyncHandler(async (req, res) => {
  const { _id, name, email } = await User.findById(req.user.id);
  console.log();

  res.status(200).json({
    id: _id,
    name,
    email,
  });
});

const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "login user" });
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};
const satpos = (res, user) => {
  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    token: generateToken(user._id),
  });
};

module.exports = { regiserUser, authUser, loginUser, getUserData };
