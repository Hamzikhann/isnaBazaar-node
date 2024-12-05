"use strict";

module.exports = (sequelize, DataTypes) => {
	const table = sequelize.define(
		"bookingAdvertisements",
		{
			isActive: {
				type: DataTypes.STRING,
				allowNull: false,
				defaultValue: "Y"
			}
		},
		{ timestamps: true }
	);
	table.associate = function (models) {
		table.belongsTo(models.bookings);
		table.belongsTo(models.advertisements);
	};
	return table;
};
