"use strict";

module.exports = (sequelize, DataTypes) => {
	const table = sequelize.define(
		"bookings",
		{
			date: DataTypes.DATE,
			status: DataTypes.STRING,
			isActive: {
				type: DataTypes.STRING,
				allowNull: false,
				defaultValue: "Y"
			}
		},
		{ timestamps: true }
	);
	table.associate = function (models) {
		table.belongsTo(models.users);
		table.belongsTo(models.events);
		table.hasMany(models.bookingAdvertisements);
		table.hasMany(models.bookingBooths);
		table.hasOne(models.bookingContact);
		table.hasMany(models.bookingPayment);
	};
	return table;
};
