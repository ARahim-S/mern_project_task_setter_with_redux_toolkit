const express = require("express");
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.use(function (req, res, next) {
  console.log("Connection to the USERAPI..");
  next();
});

router.route("/").post(registerUser);
router.route("/login").post(loginUser);
router.route("/me").get(protect, getMe);

module.exports = router;
