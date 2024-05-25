const express = require("express");
const {
  createProject,
  getProject,
  deleteProject,
  getProjects,
} = require("../controller/projectController");

const router = express.Router();

router.post("/create", createProject);
router.get("/get", getProjects);
router.get("/get/:id", getProject);
router.delete("/delete/:id", deleteProject);

module.exports = router;
