const express = require("express");
const path = require("path");
const passport = require("passport");

const mongoose = require("mongoose");
const logger = require("morgan");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());
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
