const Project = require("../model/projectModel");

//create project
async function createProject(req, res) {
  try {
    const project = await Project.create(req.body);

    res.status(200).json(project);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({message: error.message});
  }
}

//get all projects
async function getProjects(req, res) {
  try {
    const projects = await Project.find();

    res.status(200).json(projects);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({message: error.message});
  }
}

//get single project
async function getProject(req, res) {
  try {
    const project = await Project.findById(req.params.id);

    res.status(200).json(project);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({message: error.message});
  }
}

//delete project
async function deleteProject(req, res) {
  try {
    await Project.findByIdAndDelete(req.params.id);

    res.status(200).json("Project deleted successfully");
  } catch (error) {
    console.error(error.message);
    res.status(500).json({message: error.message});
  }
}

module.exports = {createProject, getProjects, getProject, deleteProject};
