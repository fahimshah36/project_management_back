const mongoose = require("mongoose");
require("dotenv").config();

const dbString = process.env.CONNECTION_STRING;

mongoose
  .connect(dbString)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

const db = mongoose.connection;

module.exports = db;
