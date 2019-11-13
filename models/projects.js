const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: String,
  description: String,
  stage: String
})

const Projects = mongoose.model("Projects", projectSchema);

module.exports = Projects;