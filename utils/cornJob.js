const db = require("../models");
const encryptHelper = require("./encryptHelper");
const emails = require("./emails");
const crypto = require("./crypto");
const Joi = require("@hapi/joi");
const { Op } = require("sequelize");

const Booths = db.booths;

exports.checkBoothStatus = async (req, res) => {
	try {
		const currentTime = new Date();
		const MinutesAgo = new Date(currentTime - 10 * 60 * 1000);
		console.log("Current Time ", currentTime, " Minutes Ago: ", MinutesAgo);

		let booths = await Booths.findAll({
			where: {
				isActive: "H",
				updatedTime: {
					[Op.lt]: MinutesAgo
				}
			}
		});

		let boothids = [];
		booths.forEach((e) => {
			boothids.push(e.id);
		});
		console.log(boothids);

		const updatedBooths = await Booths.update({ isActive: "Y", updatedTime: null }, { where: { id: boothids } });
		console.log(updatedBooths);
	} catch (err) {
		console.log(err);
	}
};
