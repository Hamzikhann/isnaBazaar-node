"use strict";

module.exports = (sequelize, DataTypes) => {
	const table = sequelize.define(
		"booths",
		{
			boothNo: DataTypes.STRING,
			updatedTime: DataTypes.DATE,
			isActive: {
				type: DataTypes.STRING,
				allowNull: false,
				defaultValue: "Y"
			}
		},
		{ timestamps: true }
	);
	table.associate = function (models) {
		table.belongsTo(models.boothCategories);
		table.hasOne(models.bookingBooths);
	};
	return table;
};
