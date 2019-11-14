require('dotenv').config();

const express = require('express');
const mongoose = require("mongoose");
const bodyParser   = require('body-parser');
const cors = require("cors");

mongoose
  .connect('mongodb://localhost/projectdetails', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())

const projectRoute = require("./routes/add");
app.use("/", projectRoute)

const fetchRoute = require("./routes/fetch");
app.use("/", fetchRoute)

const deleteRoute = require("./routes/delete");
app.use("/", deleteRoute)

const updateRoute = require("./routes/update");
app.use("/", updateRoute)

app.listen(`${process.env.PORT}`, () => console.log(`App running on port ${process.env.PORT}`));
