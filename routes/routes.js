"use strict";
const jwt = require("../utils/jwt");

const authenticationRouteHandler = require("../modules/authentication/router");
const usersRouteHandler = require("../modules/users/router");
const eventRouteHandler = require("../modules/events/router");
const advertisementsRouteHandler = require("../modules/advertisements/router");
const boothsRouteHandler = require("../modules/booths/router");
const bookingRouteHandler = require("../modules/bookings/router");
const dashboardRouteHandler = require("../modules/dashboard/router");

class Routes {
	constructor(app) {
		this.app = app;
	}
	appRoutes() {
		this.app.use("/api/auth", authenticationRouteHandler);
		this.app.use("/api/user", usersRouteHandler);
		this.app.use("/api/event", eventRouteHandler);
		this.app.use("/api/advertisements", advertisementsRouteHandler);
		this.app.use("/api/booths", boothsRouteHandler);
		this.app.use("/api/booking", bookingRouteHandler);
		this.app.use("/api/dashboard", dashboardRouteHandler);
	}
	routesConfig() {
		this.appRoutes();
	}
}
module.exports = Routes;
