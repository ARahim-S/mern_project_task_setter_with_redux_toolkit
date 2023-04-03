const asyncHandler = require("express-async-handler");
const Task = require("../models/taskModel");
const User = require("../models/userModel");

// @desc    Get goals
// @route   GET /api/tasks
// @access  Private
const getAllTask = asyncHandler(async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.status(200).json(tasks);
});

// @desc    Create task
// @route   POST /api/tasks
// @access  Private

const createTask = asyncHandler(async (req, res) => {
  const { title, text } = req.body;
  if (!text || !title) {
    res.status(400);
    throw new Error("Please add text and title fields");
  }

  const task = await Task.create({
    title,
    text,
    user: req.user.id,
  });
  res.status(200).json(task);
});

// @desc    Update task
// @route   PATCH/api/tasks/:id
// @access  Private

const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    res.status(400);
    throw new Error("Task not found");
  }

  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (task.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedTask);
});

// @desc    Delete goal
// @route   DELETE /api/tasks/:id
// @access  Private

const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    res.status(400);
    throw new Error("Task not found");
  }

  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (task.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await task.deleteOne();
  res.status(200).json({
    message: "Deleted succesfully",
    id: req.params.id,
  });
});

module.exports = {
  getAllTask,
  createTask,
  updateTask,
  deleteTask,
};
