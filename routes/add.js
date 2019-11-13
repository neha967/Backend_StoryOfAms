const express = require('express');
const router  = express.Router();
const Projects = require("../models/projects");

router.post("/addproject", (req,res,next) => {
    
    var newProject = new Projects({
      title: req.body.title,
      description: req.body.description,
      stage: "Flowchart"
    })
  
    newProject.save()
    .then((project)=>{
      console.log("saved!" + project);
      res.json(project)
    })
    .catch((error)=>{
      console.log(`Oops, you  got an error, ${error}`)
    })
  })

  module.exports = router;