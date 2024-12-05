const fs = require("fs");
const secrets = require("../config/secrets");
const nodeMailer = require("./nodeMailer");
const jwt = require("./jwt");
const crypto = require("../utils/crypto");
const handlebars = require("handlebars");
const db = require("../models");

var { SendMailClient } = require("zeptomail");

const url = "api.zeptomail.com/";
const token =
	"Zoho-enczapikey wSsVR613qEGkCq0unDL8Lroxy1oHU1rzRxsujVT0un6pTfGWp8dvlEWfBQCjFKJMGTM/F2MTrbl9zB4Dg2UK24gpyVAIWiiF9mqRe1U4J3x17qnvhDzOXGxbkBqLKYkNww9qnGRpEcok+g==";

let client = new SendMailClient({ url, token });

const baseURL = secrets.frontend_URL;

const emailErrorTo = secrets.email.error;
const emailFrom = secrets.email.auth.from;

const Booking = db.bookings;
const Booths = db.booths;
const BoothCategories = db.boothCategories;
const BookingContact = db.bookingContact;
const BookingBooths = db.bookingBooths;
/**
 * Email component
 * @constructor
 */
function Email() {}

Email.errorEmail = async (req, error) => {
	try {
		const data = fs.readFileSync("./templates/emailError.html", "utf8");
		var text = data;
		const userInfo = {
			userId: req.userId ? crypto.decrypt(req.userId) : "NULL",
			roleId: req.roleId ? crypto.decrypt(req.roleId) : "NULL",
			role: req.role ? req.role : "NULL"
		};
		// =================== device info ====================
		const DeviceDetector = require("device-detector-js");
		const deviceDetector = new DeviceDetector();
		const userAgent = req.headers && req.headers["user-agent"] ? req.headers["user-agent"] : null;
		const deviceInfo = userAgent ? deviceDetector.parse(userAgent) : null;
		//=====================================================
		text = text.replace("[USER_INFO]", JSON.stringify(userInfo));
		text = text.replace("[DEVICE_INFO]", JSON.stringify(deviceInfo));
		text = text.replace("[API]", JSON.stringify(req.originalUrl));
		text = text.replace("[METHOD]", req.method ? req.method : null);
		text = text.replace("[REQ_BODY]", JSON.stringify(req.body));
		text = text.replace("[REQ_PARAMS]", JSON.stringify(req.params));
		text = text.replace("[ERROR]", error);
		var mailOptions = {
			from: `ISNA <${emailFrom}>`,
			to: emailErrorTo,
			subject: "ERROR in ISNA Bazar(" + req.headers.origin + ")",
			html: text
		};
		return nodeMailer(mailOptions);
	} catch (error) {
		console.log(error);
		throw error;
	}
};

Email.cornJob = async (dateOne, dateTwo) => {
	try {
		const emailTemplateSource = fs.readFileSync("./templates/cornJob.html", "utf8");
		const emailTemplateSource2 = fs.readFileSync("./templates/cornJob2.html", "utf8");

		const emailTemplate = handlebars.compile(emailTemplateSource);
		const emailTemplate2 = handlebars.compile(emailTemplateSource2);

		dateTwo.forEach(({ manager, courses }) => {
			const subject = "Courses Information";
			const html = emailTemplate2({ managers: [{ manager, courses }] });

			var mailOptions = {
				from: `LMS <${emailFrom}>`,
				to: manager.email,
				bcc: emailErrorTo,
				subject: subject,
				html: html
			};
			return nodeMailer(mailOptions);
		});
		dateOne.forEach((entry) => {
			const htmlContent = emailTemplate(entry);

			var mailOptions = {
				from: `LMS <${emailFrom}>`,
				to: entry.manager.email,
				bcc: emailErrorTo,
				subject: "Course Completion Reminder",
				html: htmlContent
			};
			return nodeMailer(mailOptions);
		});
	} catch (error) {
		console.log(error);
		throw error;
	}
};

Email.bookingConfirmation = async (id) => {
	try {
		const bookingId = id;

		let booking = await Booking.findOne({
			where: { id: bookingId, isActive: "Y" },
			include: [
				{
					model: BookingBooths,
					where: { isActive: "Y" },
					include: [
						{
							model: Booths,
							where: { isActive: "S" },
							include: [
								{
									model: BoothCategories
								}
							]
						}
					]
				},
				{
					model: BookingContact
				}
			]
		});
		if (booking) {
			const user = booking.bookingContact;
			const booths = booking.bookingBooths;

			const data = fs.readFileSync("./templates/emailBooking.html", "utf8");
			var text = data;

			text = text.replace("[BUSINESS_NAME]", user.companyName);
			text = text.replace("[BUSINESS_TYPE]", user.businessType);
			text = text.replace("[NAME]", user.firstName + " " + user.lastName);
			text = text.replace("[EMAIL]", user.email);
			text = text.replace("[ADDRESS]", user.address);
			text = text.replace("[CITY]", user.city);
			text = text.replace("[STATE]", user.state);
			text = text.replace("[PHONE1]", user.phoneOffice);
			text = text.replace("[PHONE2]", user.phoneHome);
			console.log(booths.length > 1);

			const boothTitle1 = booths.length > 0 ? booths[0].booth.boothCategory.title : "";
			const boothNo1 = booths.length > 0 ? booths[0].booth.boothNo : "";
			const boothPrice1 = booths.length > 0 ? "$" + booths[0].booth.boothCategory.price : "";

			const boothTitle2 = booths.length > 1 ? booths[1].booth.boothCategory.title : "";
			const boothNo2 = booths.length > 1 ? booths[1].booth.boothNo : "";
			const boothPrice2 = booths.length > 1 ? "$" + booths[1].booth.boothCategory.price : "";

			console.log(boothTitle2, boothNo2, boothPrice2);

			text = text.replace("[B_TYPE_1]", boothTitle1);
			text = text.replace("[B_NO_1]", boothNo1);
			text = text.replace("[B_PRICE_1]", boothPrice1);

			text = text.replace("[B_TYPE_2]", boothTitle2);
			text = text.replace("[B_NO_2]", boothNo2);
			text = text.replace("[B_PRICE_2]", boothPrice2);

			let sendmail = await client.sendMail({
				from: {
					address: "noreply@iqvis.net",
					name: "ISNA"
				},
				to: [
					{
						email_address: {
							address: user.email,
							name: user.firstName + " " + user.lastName
						}
					}
				],
				subject: "Booking Confirmation - 61st Annual ISNA Convention Bazaar Hilton Anatole Dallas, TX",
				htmlbody: text
			});
		} else {
			console.log("Error in booking id in bookingConfirmation");
		}
	} catch (error) {
		console.log(error);
		throw error;
	}
};

module.exports = Email;
