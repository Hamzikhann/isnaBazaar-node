"use strict";

module.exports = (sequelize, DataTypes) => {
	const table = sequelize.define(
		"bookingContact",
		{
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			phoneOffice: DataTypes.STRING,
			phoneHome: DataTypes.STRING,
			businessType: DataTypes.STRING,
			companyName: DataTypes.STRING,
			fax: DataTypes.STRING,
			address: DataTypes.STRING,
			city: DataTypes.STRING,
			email: DataTypes.STRING,
			state: DataTypes.STRING,
			zipcode: DataTypes.STRING,
			country: DataTypes.STRING,
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
	};
	return table;
};
