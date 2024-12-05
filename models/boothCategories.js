"use strict";

module.exports = (sequelize, DataTypes) => {
	const table = sequelize.define(
		"boothCategories",
		{
			title: DataTypes.STRING,
			color: DataTypes.STRING,
			price: DataTypes.STRING,
			isActive: {
				type: DataTypes.STRING,
				allowNull: false,
				defaultValue: "Y"
			}
		},
		{ timestamps: true }
	);
	table.associate = function (models) {
		table.hasMany(models.booths);
	};
	return table;
};
