const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const ApiErrorHandler = require("./middlewares/ApiErrorHandler");
const loginroute = require("./route/login.route");
const signuproute = require("./route/signup.route");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", loginroute);
app.use("/api/user", signuproute);
app.use(ApiErrorHandler);

module.exports = app;
