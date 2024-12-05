"use strict";

const express = require("express");
const router = express.Router();
const usersController = require("./user.controller");
const jwt = require("../../utils/jwt");

router.post("/detail", jwt.protect, usersController.detail);
router.post("/update/profile", jwt.protect, usersController.updateProfile);
router.post("/update/password", jwt.protect, usersController.updatePassword);

router.post("/roles/list", jwt.protect, (req, res) => {
	if (req.role == "Administrator") {
		usersController.rolesList(req, res);
	} else {
		res.status(403).send({ message: "Forbidden Access" });
	}
});

module.exports = router;
