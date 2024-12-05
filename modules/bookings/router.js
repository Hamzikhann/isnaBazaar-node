"use strict";

const express = require("express");
const router = express.Router();
const bookingsController = require("./bookings.controller");
const jwt = require("../../utils/jwt");

router.post("/create", (req, res) => {
	bookingsController.create(req, res);
});

router.post("/detail", (req, res) => {
	bookingsController.detail(req, res);
});

router.post("/update", jwt.protect, (req, res) => {
	bookingsController.update(req, res);
});

router.post("/list", jwt.protect, (req, res) => {
	bookingsController.list(req, res);
});

router.post("/refund", jwt.protect, (req, res) => {
	bookingsController.refund(req, res);
});

module.exports = router;
