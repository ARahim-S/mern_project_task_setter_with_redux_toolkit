const mongoose = require("mongoose");
const colors = require("colors");

const connectMongoDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${connect.connection.host}`.blue.underline);
  } catch (error) {
    console.log("Not connected to the DB");
    process.exit(1);
  }
};

module.exports = connectMongoDB;
