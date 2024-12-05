"use strict";

module.exports = (sequelize, DataTypes) => {
	const table = sequelize.define(
		"advertisements",
		{
			title: DataTypes.TEXT,
			price: DataTypes.STRING,
			sampleUrl: DataTypes.STRING,
			isActive: {
				type: DataTypes.STRING,
				allowNull: false,
				defaultValue: "Y"
			}
		},
		{ timestamps: true }
	);
	table.associate = function (models) {
		table.belongsTo(models.advertisementCategories);
		table.hasMany(models.bookingAdvertisements);
	};
	return table;
};
