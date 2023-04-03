const express = require("express");
const dotenv = require("dotenv").config();
const connectMongoDB = require("./utils/mongoConnect");
const { errorHandler } = require("./middlewares/errorHandler");

connectMongoDB();
const app = express();

app.use(express.json({ limit: "50kb" }));
app.use(express.urlencoded({ extended: true }));

const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");

app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 8000;

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
