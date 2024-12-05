const db = require("../models");
const encryptHelper = require("./encryptHelper");
const emails = require("./emails");

const Booths = db.booths;
const BoothCategories = db.boothCategories;

exports.boothsList = async (req, res) => {
	try {
		let updatedBooths = await Booths.findAll({
			include: [
				{
					model: BoothCategories,
					where: { isActive: "Y" },
					attributes: { exclude: ["createdAt", "updatedAt", "isActive"] }
				}
			],
			attributes: { exclude: ["createdAt", "updatedAt", "isActive"] }
		});

		return encryptHelper(updatedBooths);
	} catch (err) {
		emails.errorEmail(req, err);
		res.status(500).send({
			message: err.message || "Some error occurred."
		});
	}
};
