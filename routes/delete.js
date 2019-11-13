const express = require('express');
const router  = express.Router();
const Projects = require("../models/projects");

router.post("/delete/:id", (req,res,next) => {
    Projects.findOneAndDelete({_id: req.params.id})
    .then(()=>{
        console.log("deleted");
        })
    .catch(err=>console.log(err))
})

module.exports = router;