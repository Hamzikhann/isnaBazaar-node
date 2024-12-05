const Joi = require("@hapi/joi");
const jwt = require("jsonwebtoken");

const db = require("../../models");
const encryptHelper = require("../../utils/encryptHelper");
const emails = require("../../utils/emails");
const crypto = require("../../utils/crypto");
const { sequelize } = require("../../models");
const Op = db.Sequelize.Op;

const Events = db.events;
const Advertisements = db.advertisements;
const AdvertisementCategories = db.advertisementCategories;
const Bookings = db.bookings;
const BookingAdvertisements = db.bookingAdvertisements;
const BookingBooths = db.bookingBooths;
const BookingContact = db.bookingContact;
const BookingPayment = db.bookingPayment;
const Booths = db.booths;
const BoothCategories = db.boothCategories;

exports.create = async (req, res) => {
	try {
		const joiSchema = Joi.object({
			eventId: Joi.string().required().messages({ "string.empty": `"Event ID" is the required field` }),
			userId: Joi.string().optional(),
			booths: Joi.array().required(),
			advertisements: Joi.array().required(),
			totalPayment: Joi.number()
				.required()
				.messages({ "number.empty": `"Total Amount" is not allowed to be empty or '0'` }),
			registrationMethod: Joi.string()
				.required()
				.messages({ "string.empty": `"Payment Registration" is not allowed to be empty` }),
			paymentMethod: Joi.string()
				.required()
				.messages({ "string.empty": `"Payment Method" is not allowed to be empty` }),
			referenceNo: Joi.string()
				.required()
				.messages({ "string.empty": `"Payment Reference" is not allowed to be empty` }),
			status: Joi.string().required().messages({ "string.empty": `"Payment Status" is not allowed to be empty` }),
			companyName: Joi.string().required().messages({ "string.empty": `"Company Name" is the required field` }),
			firstName: Joi.string().required().messages({ "string.empty": `"First Name" is the required field` }),
			lastName: Joi.string().required().messages({ "string.empty": `"Last Name" is the required field` }),
			address: Joi.string().required().messages({ "string.empty": `"Address" is the required field` }),
			city: Joi.string().required().messages({ "string.empty": `"City" is the required field` }),
			state: Joi.string().required().messages({ "string.empty": `"State" is the required field` }),
			country: Joi.string().required().messages({ "string.empty": `"Country" is the required field` }),
			zipcode: Joi.string().optional().allow("").allow(null),
			phoneOffice: Joi.string().required().messages({ "string.empty": `"Phone Office" is the required field` }),
			phoneHome: Joi.string().optional().allow("").allow(null),
			fax: Joi.string().optional().allow("").allow(null),
			email: Joi.string().required().messages({ "string.empty": `"Email" is the required field` }),
			businessType: Joi.string().required().messages({ "string.empty": `"Business Type" is the required field` })
		});
		const { error, value } = joiSchema.validate(req.body);

		if (error) {
			emails.errorEmail(req, error);
			const message = error.details[0].message.replace(/"/g, "");
			res.status(400).send({
				message: message
			});
		} else {
			const eventId = crypto.decrypt(req.body.eventId);
			const status = req.body.status;
			const userId = req.userId ? crypto.decrypt(req.userId) : null;

			const totalPayment = req.body.totalPayment;
			const registrationMethod = req.body.registrationMethod;
			const paymentMethod = req.body.paymentMethod;
			const referenceNo = req.body.referenceNo;
			const booths = req.body.booths;
			const advertisements = req.body.advertisements;

			//contact info
			const firstName = req.body.firstName;
			const lastName = req.body.lastName;
			const phoneOffice = req.body.phoneOffice;
			const phoneHome = req.body.phoneHome;
			const businessType = req.body.businessType;
			const companyName = req.body.companyName;
			const fax = req.body.fax;
			const address = req.body.address;
			const city = req.body.city;
			const state = req.body.state;
			const zipcode = req.body.zipcode;
			const country = req.body.country;
			const email = req.body.email;

			const currentDate = new Date();
			const date = currentDate.toISOString().split("T")[0];

			const bookingContact = {
				firstName,
				lastName,
				phoneOffice,
				phoneHome,
				businessType,
				companyName,
				fax,
				address,
				city,
				state,
				zipcode,
				country,
				email
			};
			const bookingObj = {
				date: date,
				status: status,
				eventId: eventId,
				userId: userId
			};

			let transaction = await sequelize.transaction();

			Bookings.create(bookingObj, { transaction })
				.then(async (response) => {
					if (response) {
						let advertise = [];
						advertisements.forEach((e) => {
							let obj = {
								bookingId: response.id,
								advertisementId: crypto.decrypt(e)
							};
							advertise.push(obj);
						});

						const createBookingAdvertisements = await BookingAdvertisements.bulkCreate(advertise, { transaction });
						bookingContact.bookingId = response.id;
						const createBookingContact = await BookingContact.create(bookingContact, { transaction });

						const booth = [];
						const boothIds = [];
						booths.forEach((e) => {
							let obj = {
								bookingId: response.id,
								boothId: crypto.decrypt(e)
							};
							booth.push(obj);
							boothIds.push(obj.boothId);
						});

						const createBookingBooths = await BookingBooths.bulkCreate(booth, { transaction });

						const createBookingPayments = await BookingPayment.create(
							{
								bookingId: response.id,
								registrationMethod: registrationMethod,
								paymentMethod: paymentMethod,
								totalPayment: totalPayment,
								referenceNo: referenceNo
							},
							{ transaction }
						);

						const updateBoothsStatuses = await Booths.update(
							{ isActive: "S", updatedTime: new Date() },
							{
								where: {
									id: { [Op.in]: boothIds }
								},
								transaction
							}
						);

						await transaction.commit();

						emails.bookingConfirmation(response.id);

						encryptHelper(response);
						res.send({ message: "Booking is confirmend", data: response });
					} else {
						res.send({ message: "Booking is already made" });
					}
				})
				.catch(async (err) => {
					console.log(err);
					if (transaction) await transaction.rollback();

					emails.errorEmail(req, err);
					res.status(500).send({
						message: err.message || "Some error occurred."
					});
				});
		}
	} catch (err) {
		console.log(err);
		emails.errorEmail(req, err);
		res.status(500).send({
			message: err.message || "Some error occurred."
		});
	}
};

exports.detail = async (req, res) => {
	try {
		const joiSchema = Joi.object({
			bookingId: Joi.string().required()
		});
		const { error, value } = joiSchema.validate(req.body);

		if (error) {
			emails.errorEmail(req, error);
			const message = error.details[0].message.replace(/"/g, "");
			res.status(400).send({
				message: message
			});
		} else {
			const bookingId = crypto.decrypt(req.body.bookingId);

			Bookings.findOne({
				where: { id: bookingId, isActive: "Y" },
				include: [
					{
						model: Events,
						attributes: { exclude: ["id", "createdAt", "updatedAt", "bookingId"] }
					},
					{
						model: BookingBooths,
						include: [
							{
								model: Booths,
								include: [
									{
										model: BoothCategories,
										attributes: { exclude: ["createdAt", "id", "updatedAt", "isActive"] }
									}
								]
							}
						],
						attributes: { exclude: ["id", "createdAt", "updatedAt", "bookingId"] }
					},
					{
						model: BookingAdvertisements,
						include: [
							{
								model: Advertisements,
								include: [
									{
										model: AdvertisementCategories,
										attributes: { exclude: ["createdAt", "id", "updatedAt", "isActive"] }
									}
								]
							}
						],
						attributes: { exclude: ["id", "createdAt", "updatedAt", "bookingId"] }
					},
					{
						model: BookingContact,
						attributes: { exclude: ["id", "createdAt", "updatedAt", "bookingId"] }
					},
					{
						model: BookingPayment,
						attributes: { exclude: ["id", "createdAt", "updatedAt", "bookingId"] }
					}
				],
				attributes: { exclude: ["id", "createdAt", "updatedAt", "userId", "eventId"] }
			})
				.then((response) => {
					encryptHelper(response);
					res.send({ message: "Details of the booking are retrieved", data: response });
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

exports.list = async (req, res) => {
	try {
		Bookings.findAll({
			where: { isActive: "Y" },
			attributes: ["id", "status", "createdAt"],
			include: [
				{
					model: BookingBooths,
					include: [
						{
							model: Booths,
							include: [
								{
									model: BoothCategories,
									attributes: { exclude: ["createdAt", "id", "updatedAt", "isActive"] }
								}
							]
						}
					],
					attributes: { exclude: ["id", "createdAt", "updatedAt", "bookingId"] }
				},
				{
					model: BookingContact,
					attributes: { exclude: ["id", "createdAt", "updatedAt", "bookingId"] }
				},
				{
					model: BookingPayment,
					attributes: { exclude: ["id", "createdAt", "updatedAt", "bookingId"] }
				}
			]
		})
			.then((response) => {
				res.send({ message: "All Bookings List", data: response });
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

exports.refund = async (req, res) => {
	try {
		const joiSchema = Joi.object({
			referenceNo: Joi.string().required()
		});
		const { error, value } = joiSchema.validate(req.body);
		if (error) {
			emails.errorEmail(req, error);
			const message = error.details[0].message.replace(/"/g, "");
			res.status(400).send({
				message: message
			});
		} else {
			const stripe = require("stripe")(process.env.STRIPE_KEY);
			const referenceNo = req.body.referenceNo;
			let transaction = await sequelize.transaction();
			BookingPayment.findOne({ where: { referenceNo: referenceNo, isActive: "Y" } }).then(async (response) => {
				if (response) {
					const refund = await stripe.refunds.create({
						payment_intent: referenceNo
					});
					if (refund) {
						let bookingId = response.bookingId;
						let bookingBooths = await BookingBooths.findAll({
							where: { bookingId: bookingId, isActive: "Y" },
							attributes: ["boothId"]
						});
						let boothIds = [];
						bookingBooths.forEach((bookingBooths) => {
							boothIds.push(bookingBooths.boothId);
						});
						console.log(boothIds);
						const updateBooths = await Booths.update({ isActive: "Y" }, { where: { id: boothIds } }, { transaction });
						const updateBookings = await Bookings.update(
							{ status: "Cancel" },
							{ where: { id: bookingId } },
							{ transaction }
						);
						res.send({ message: "Refund is Successful", data: refund });
					} else {
						res.send({ message: "Some Error while Refunding the payment. Please retry again later" });
					}
				} else {
					res.send({ message: "There is no payment with this referenceNo" });
				}
			});
		}
	} catch (err) {
		emails.errorEmail(req, err);
		res.status(500).send({
			message: err.message || "Some error occurred."
		});
	}
};

exports.update = async (req, res) => {
	try {
		const joiSchema = Joi.object({
			bookingId: Joi.string().required().messages({ "string.empty": `"Booking ID" is the required field` }),
			firstName: Joi.string().required().messages({ "string.empty": `"First Name" is the required field` }),
			lastName: Joi.string().required().messages({ "string.empty": `"Last Name" is the required field` }),
			email: Joi.string().required().messages({ "string.empty": `"Email" is the required field` }),
			phoneOffice: Joi.string().required().messages({ "string.empty": `"Phone Office" is the required field` }),
			phoneHome: Joi.string().optional().allow("").allow(null),
			fax: Joi.string().optional().allow("").allow(null),
			address: Joi.string().required().messages({ "string.empty": `"Address" is the required field` }),
			city: Joi.string().required().messages({ "string.empty": `"City" is the required field` }),
			state: Joi.string().required().messages({ "string.empty": `"State" is the required field` }),
			zipcode: Joi.string().optional().allow("").allow(null)
		});
		const { error, value } = joiSchema.validate(req.body);

		if (error) {
			emails.errorEmail(req, error);
			const message = error.details[0].message.replace(/"/g, "");
			res.status(400).send({
				message: message
			});
		} else {
			const bookingId = req.body.bookingId;
			const contactObj = {
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				email: req.body.email,
				phoneOffice: req.body.phoneOffice,
				phoneHome: req.body.phoneHome,
				fax: req.body.fax,
				address: req.body.address,
				city: req.body.city,
				state: req.body.state,
				zipcode: req.body.zipcode
			};
			BookingContact.update(contactObj, { where: { bookingId: bookingId } })
				.then((response) => {
					if (response) {
						res.send({ message: "Booking details updated successfully" });
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
