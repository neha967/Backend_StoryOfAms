const express = require('express');
const router  = express.Router();
const Projects = require("../models/projects");

router.get("/fetchprojects", (req,res,next) => {
    
    Projects.find({})
    .then(projects=>{
        res.json(projects)
    })
    .catch(err=>console.log(err))
  })

  module.exports = router;