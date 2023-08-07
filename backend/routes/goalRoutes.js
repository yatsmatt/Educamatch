const express = require("express");
const router = express.Router();
const {
  getGoals,
  deleteGoals,
  putGoals,
  setGoals,
} = require("../controllers/goalControler");

// structure of requiests

// router.get("/", getGoals); + router.post("/", postGoals); =
router.route("/").get(getGoals).post(setGoals);

router.put("/:id", putGoals);

router.delete("/:id", deleteGoals);

module.exports = router;
