"use strict";

const express = require("express");
const router = express.Router();

const advertisementController = require("./advertisements.controller");

router.post("/list", (req, res) => {
	advertisementController.list(req, res);
});

// router.post("/update", upload.single("image"), (req, res) => {
// 	advertisementController.update(req, res);
// });

module.exports = router;
