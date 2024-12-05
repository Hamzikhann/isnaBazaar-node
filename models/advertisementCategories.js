"use strict";

module.exports = (sequelize, DataTypes) => {
	const table = sequelize.define(
		"advertisementCategories",
		{
			title: DataTypes.TEXT,
			isActive: {
				type: DataTypes.STRING,
				allowNull: false,
				defaultValue: "Y"
			}
		},
		{ timestamps: true }
	);
	table.associate = function (models) {
		table.hasMany(models.advertisements);
	};
	return table;
};
