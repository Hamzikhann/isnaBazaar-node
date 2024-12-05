"use strict";

module.exports = (sequelize, DataTypes) => {
	const table = sequelize.define(
		"bookingBooths",
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
		table.belongsTo(models.booths);
	};
	return table;
};
