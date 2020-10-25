require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("../routes");
const { handleGenericError, handleRouteNotFound } = require("../middlewares");
const app = express();

//Settings:
app.set("port", process.env.PORT || 8000);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

if (process.env.NODE_ENV !== "production") {
  const logger = require("morgan");
  app.use(logger("dev"));
}

//Config routes
app.use("/v1/api", routes);

app.use(handleRouteNotFound);
app.use(handleGenericError);

module.exports = app;
