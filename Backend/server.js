const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const logger = require("morgan");

const app = express();

app.use(express.json());
mongoose
  .connect("put it here ", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to the db ");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(5000, () => {
  console.log("Server has started!");
});
