"use strict";

const express = require("express");
const router = express.Router();
const boothsController = require("./booths.controller");

router.post("/list/categories", (req, res) => {
	boothsController.listCategories(req, res);
});

router.post("/list", (req, res) => {
	boothsController.list(req, res);
});

router.post("/status/check", (req, res) => {
	boothsController.statusCheck(req, res);
});

// router.post("/status/update", (req, res) => {
// 	boothsController.statusUpdate(req, res);
// });

router.post("/check/multiple", (req, res) => {
	boothsController.checkBooths(req, res);
});

router.post("/update/booths", (req, res) => {
	boothsController.updateBoothStatus(req, res);
});

module.exports = router;
