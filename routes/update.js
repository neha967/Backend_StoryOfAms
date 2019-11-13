const express = require('express');
const router  = express.Router();
const Projects = require("../models/projects");

router.post("/update/:id/:stage", (req,res,next) => {

    let updatedProject = {
        stage: req.params.stage
    }

    Projects.findByIdAndUpdate(req.params.id, {$set: updatedProject}, {new:true})
    .then(project=>{
        res.json(project)
    })
    .catch(err=>console.log(err))

  })

  module.exports = router;