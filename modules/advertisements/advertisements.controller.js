const Joi = require("@hapi/joi");

const db = require("../../models");
const encryptHelper = require("../../utils/encryptHelper");
const emails = require("../../utils/emails");
const crypto = require("../../utils/crypto");
const { sequelize } = require("../../models");
const { Op } = require("sequelize");

const Advertisements = db.advertisements;
const AdvertisementCategories = db.advertisementCategories;

exports.list = (req, res) => {
	try {
		AdvertisementCategories.findAll({
			where: { isActive: "Y" },
			include: [
				{
					model: Advertisements,
					where: { isActive: "Y" },
					attributes: { exclude: ["createdAt", "updatedAt", "isActive", "advertisementCategoryId"] }
				}
			],
			attributes: { exclude: ["createdAt", "updatedAt", "isActive"] }
		})
			.then((response) => {
				encryptHelper(response);
				res.send({ message: "list of Advertisements", data: response });
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

// exports.update = async (req, res) => {
// 	let sampleUrl = "uploads/adertisement/" + req.file.filename;
// 	let ids = req.body.ids;
// 	let updatePhoto = await Advertisements.update({ sampleUrl }, { where: { advertisementCategoryId: ids } });
// 	res.send({ updatePhoto });
// };
