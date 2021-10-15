const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
//using environmental variables
dotenv.config();
const app = express();

//mongoDB connection
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to mongo-db");
  }
);

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.get("/", (req, res) => {
  res.send("welcome to homepage");
});
app.get("/users", (req, res) => {
  res.send("welcome to user page");
});

app.listen(8080, function () {
  console.log("running on 8800");
});
