const express = require("express");
const router = express.Router();
const {
  regiserUser,
  authUser,
  loginUser,
  getUserData,
} = require("../controllers/userControler");
const { protect } = require("../middleware/authMiddleware");

router.post("/", regiserUser);
router.post("/login", loginUser);
router.post("/get", protect, getUserData);

module.exports = router;
