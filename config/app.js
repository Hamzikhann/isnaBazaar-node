const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");

class AppConfig {
	constructor(app, io) {
		dotenv.config();
		this.app = app;
		this.io = io;
	}
	includeConfig() {
		global.crypto = require("../utils/crypto");

		// console.log(crypto.decrypt('UWRuejBBVlRwcm9xaEpoaFhoK2hEUT09'))

		this.app.use(cors());
		this.app.use(bodyParser.json({ limit: "5mb" }));
		this.app.use("/uploads", express.static("uploads"));

		this.app.use((req, res, next) => {
			console.log("__________________________________");
			console.log(`${new Date()} ${req.originalUrl}`);
			console.log("Request Params: ", req.params);
			console.log("Request Body: ", req.body);
			req.io = this.io;

			res.header("Access-Control-Allow-Origin", req.headers.origin);
			res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
			return next();
		});
	}
}
module.exports = AppConfig;
