const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const {
  getAllTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
const router = express.Router();

router.use(function (req, res, next) {
  console.log("Connection to the TASKAPI..");
  next();
});

router.route("/").get(protect, getAllTask).post(protect, createTask);
router.route("/:id").patch(protect, updateTask).delete(protect, deleteTask);

module.exports = router;
