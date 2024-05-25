const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  creationTime: {
    type: Date,
    default: Date.now,
  },
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
