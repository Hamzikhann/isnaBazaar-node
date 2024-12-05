const Joi = require("@hapi/joi");

const db = require("../../models");
const encryptHelper = require("../../utils/encryptHelper");
const emails = require("../../utils/emails");
const crypto = require("../../utils/crypto");
const { sequelize } = require("../../models");
const { Op } = require("sequelize");
const updatedBoothsList = require("../../utils/updatedBoothList");

const Booths = db.booths;
const BoothCategories = db.boothCategories;
const BookingBooths = db.bookingBooths;

exports.list = async (req, res) => {
	try {
		let booths = await Booths.findAll({
			include: [
				{
					model: BoothCategories,
					where: { isActive: "Y" },
					attributes: { exclude: ["createdAt", "id", "updatedAt", "isActive"] }
				},
				{
					model: BookingBooths,
					where: { isActive: "Y" },
					required: false,
					attributes: ["createdAt"]
				}
			],
			attributes: { exclude: ["createdAt", "updatedAt"] }
		});

		encryptHelper(booths);
		res.send({ message: "list of booths", data: booths });
	} catch (err) {
		emails.errorEmail(req, err);
		res.status(500).send({
			message: err.message || "Some error occurred."
		});
	}
};

exports.listCategories = (req, res) => {
	try {
		BoothCategories.findAll({
			where: { isActive: "Y" },
			// include: [
			// 	{
			// 		model: Booths,
			// 		where: { isActive: "Y" },
			// 		attributes: []
			// 	}
			// ],
			attributes: {
				exclude: ["createdAt", "id", "updatedAt"]
				// include: [[sequelize.fn("COUNT", sequelize.col("boothCategories.id")), "availableBooths"]]
			}
			// group: ["id", "boothCategories.id"]
		})
			.then((response) => {
				encryptHelper(response);
				res.send({ message: "list of Booth Categories", data: response });
			})
			.catch((err) => {
				emails.errorEmail(req, err);
				res.status(500).send({
					message: err.message || "Some error occurred."
				});
			});
	} catch (err) {
		emails.errorEmail(req, err);
		res.status(500).send({
			message: err.message || "Some error occurred."
		});
	}
};

exports.statusCheck = async (req, res) => {
	try {
		const joiSchema = Joi.object({
			boothNo: Joi.string().required()
		});
		const { error, value } = joiSchema.validate(req.body);
		if (error) {
			emails.errorEmail(req, error);
			const message = error.details[0].message.replace(/"/g, "");
			res.status(400).send({
				message: message
			});
		} else {
			const boothNo = req.body.boothNo;
			const boothExists = await Booths.findOne({
				where: { boothNo }
			});

			if (boothExists && boothExists.isActive == "Y") {
				res.send({ message: "Booth # " + boothExists.boothNo + " available.", status: 1 });
			} else {
				res.send({
					message: "Booth # " + boothExists.boothNo + " has already been reserved by someone else.",
					status: 0
				});
			}
		}
	} catch (err) {
		emails.errorEmail(req, err);
		res.status(500).send({
			message: err.message || "Some error occurred."
		});
	}
};

exports.statusUpdate = async (req, res) => {
	try {
		const joiSchema = Joi.object({
			boothNo: Joi.string().required()
		});
		const { error, value } = joiSchema.validate(req.body);
		if (error) {
			emails.errorEmail(req, error);
			const message = error.details[0].message.replace(/"/g, "");
			res.status(400).send({
				message: message
			});
		} else {
			const boothNo = req.body.boothNo;
			const boothExists = await Booths.findOne({
				where: { boothNo }
			});

			if (boothExists) {
				if (boothExists.isActive == "H" || boothExists.isActive == "S") {
					res
						.status(401)
						.send({ message: "Booth # " + boothExists.boothNo + " has already been reserved by someone else." });
				} else {
					Booths.update({ isActive: "H", updatedTime: new Date() }, { where: { id: boothExists.id } })
						.then(async (response) => {
							if (response) {
								let updatedBooths = await updatedBoothsList.boothsList(req, res);

								req.io.emit("updated booths", { data: updatedBooths });
								res.send({
									message:
										"The booth # " +
										boothExists.boothNo +
										" status has been put on hold; please confirm payment within 15 minutes."
								});
							}
						})
						.catch((err) => {
							emails.errorEmail(req, err);
							res.status(500).send({
								message: err.message || "Some error occurred."
							});
						});
				}
			} else {
				res.status(401).send({ message: "This booth does not exists." });
			}
		}
	} catch (err) {
		emails.errorEmail(req, err);
		res.status(500).send({
			message: err.message || "Some error occurred."
		});
	}
};

exports.checkBooths = async (req, res) => {
	try {
		const joiSchema = Joi.object({
			boothsNo: Joi.array().required()
		});
		const { error, value } = joiSchema.validate(req.body);
		if (error) {
			emails.errorEmail(req, error);
			const message = error.details[0].message.replace(/"/g, "");
			res.status(400).send({
				message: message
			});
		} else {
			const boothsNo = req.body.boothsNo;
			const availableBooths = [];
			const notAvailableBooths = [];

			Booths.findAll({ where: { boothNo: boothsNo } })
				.then(async (response) => {
					response.forEach((booth) => {
						if (booth.isActive == "S" || booth.isActive == "H") {
							notAvailableBooths.push(booth);
						} else {
							availableBooths.push(booth);
						}
					});

					if (availableBooths.length > 0 && notAvailableBooths.length == 0) {
						await Booths.update({ isActive: "H", updatedTime: new Date() }, { where: { boothNo: boothsNo } });
					}

					res.send({
						message: "Booths Status",
						data: {
							availableBooths: availableBooths,
							notAvailableBooths: notAvailableBooths
						}
					});
				})
				.catch((err) => {
					emails.errorEmail(req, err);
					res.status(500).send({
						message: err.message || "Some error occurred."
					});
				});
		}
	} catch (err) {
		emails.errorEmail(req, err);
		res.status(500).send({
			message: err.message || "Some error occurred."
		});
	}
};

exports.updateBoothStatus = async (req, res) => {
	try {
		const joiSchema = Joi.object({
			boothNo: Joi.array().required(),
			status: Joi.string().required()
		});
		const { error, value } = joiSchema.validate(req.body);
		if (error) {
			emails.errorEmail(req, error);
			const message = error.details[0].message.replace(/"/g, "");
			res.status(400).send({
				message: message
			});
		} else {
			const boothNo = req.body.boothNo;
			const status = req.body.status;

			var updatedStatus = { isActive: status, updatedTime: new Date() };

			Booths.update(updatedStatus, { where: { boothNo } })
				.then((response) => {
					if (response) {
						res.send({ message: "Booth Status updated", data: response });
					}
				})
				.catch((err) => {
					emails.errorEmail(req, err);
					res.status(500).send({
						message: err.message || "Some error occurred."
					});
				});
		}
	} catch (err) {
		emails.errorEmail(req, err);
		res.status(500).send({
			message: err.message || "Some error occurred."
		});
	}
};
