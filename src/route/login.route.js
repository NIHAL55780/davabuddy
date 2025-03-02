const express = require("express");
const { loginUser } = require("../controllers/login.controller");

const router = express.Router();

router.post("/login", loginUser);

module.exports = router;
