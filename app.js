const express = require("express");
const bodyparser = require("body-parser");

const app = express();
const { API_VERSION } = require("./config.js");

//Load
const authRoutes = require("./routers/auth");
const userRoutes = require("./routers/user");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//configure Header HTTP
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//Router Basic
app.use(`/api/${API_VERSION}`, authRoutes);
app.use(`/api/${API_VERSION}`, userRoutes);

module.exports = app;
