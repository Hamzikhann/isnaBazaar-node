"use strict";

const express = require("express");
const router = express.Router();
const dashboardController = require("./dashboard.controller");
const jwt = require("../../utils/jwt");

router.post("/", jwt.protect, (req, res) => {
	dashboardController.adminDashboard(req, res);
});

module.exports = router;
