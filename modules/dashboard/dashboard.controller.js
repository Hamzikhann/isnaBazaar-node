const Joi = require("@hapi/joi");

const db = require("../../models");
const encryptHelper = require("../../utils/encryptHelper");
const emails = require("../../utils/emails");
const crypto = require("../../utils/crypto");
const { sequelize } = require("../../models");
const { Op } = require("sequelize");

const Booths = db.booths;
const BoothCategories = db.boothCategories;
const BookingPayment = db.bookingPayment;
const Bookings = db.bookings;
const Users = db.users;

exports.adminDashboard = async (req, res) => {
	try {
		const totalCustomers = await Users.count({ where: { isActive: "Y" } });

		const totalRevenue = await BookingPayment.sum("totalPayment", {
			where: { isActive: "Y" }
		});

		const totalBookings = await Bookings.count({ where: { status: "C" } });

		const categoryBookedAndAvailable = await BoothCategories.findAll({
			where: { isActive: "Y" },
			include: [
				{
					model: Booths,
					// where: { isActive: "Y" },
					attributes: []
				}
			],
			attributes: {
				exclude: ["createdAt", "id", "updatedAt"],
				include: [
					[
						sequelize.fn("COUNT", sequelize.literal("CASE WHEN `booths`.`isActive` = 'Y' THEN 1 ELSE NULL END")),
						"totalAvailableBooths"
					],
					[
						sequelize.fn("COUNT", sequelize.literal("CASE WHEN `booths`.`isActive` = 'H' THEN 1 ELSE NULL END")),
						"totalBoothsOnHold"
					],
					[
						sequelize.fn("COUNT", sequelize.literal("CASE WHEN `booths`.`isActive` = 'C' THEN 1 ELSE NULL END")),
						"totalBookedBooths"
					]
				]
			},
			group: ["id", "boothCategories.id"]
		});

		const recentBookings = await Bookings.findAll({ where: { status: "C" }, limit: 5, order: [["createdAt", "DESC"]] });
		encryptHelper(recentBookings);

		let data = {
			stats: {
				totalCustomers,
				totalBookings,
				totalRevenue,
				categoryBookedAndAvailable,
				recentBookings
			}
		};

		res.send({ message: "Stats for admin dashboard", data: data });
	} catch (err) {
		emails.errorEmail(req, err);
		res.status(500).send({
			message: err.message || "Some error occurred."
		});
	}
};
