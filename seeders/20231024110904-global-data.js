"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const date = new Date();

		await queryInterface.bulkInsert("roles", [{ title: "Administrator", createdAt: date, updatedAt: date }], {});

		await queryInterface.bulkInsert(
			"users",
			[
				{
					firstName: "Admin",
					lastName: "Account",
					email: "admin@isna.com",
					password: "Isna12!@",
					roleId: "1",
					createdAt: date,
					updatedAt: date
				}
			],
			{}
		);
		await queryInterface.bulkInsert(
			"eventCategories",
			[
				{
					title: "Dinner",
					createdAt: date,
					updatedAt: date
				},
				{
					title: "Conference",
					createdAt: date,
					updatedAt: date
				},
				{
					title: "Matrimonial Banquet",
					createdAt: date,
					updatedAt: date
				},
				{
					title: "Online Bazaar",
					createdAt: date,
					updatedAt: date
				},
				{
					title: "Concert",
					createdAt: date,
					updatedAt: date
				}
			],
			{}
		);
		await queryInterface.bulkInsert(
			"events",
			[
				{
					eventName: "ISNA Convention Bazaar",
					eventAddress: "61st Annual ISNA Convention Bazaar Hilton Anatole Dallas, TX",
					eventStartDate: "2024-08-30",
					eventEndDate: "2024-09-02",
					createdAt: date,
					updatedAt: date,
					eventCategoryId: 4
				}
			],
			{}
		);
		await queryInterface.bulkInsert(
			"boothCategories",
			[
				{
					title: "Sponsorship",
					price: "2500",
					color: "blue",
					createdAt: date,
					updatedAt: date
				},
				{
					title: "Prime A",
					price: "1700",
					color: "orange",
					createdAt: date,
					updatedAt: date
				},
				{
					title: "Prime B",
					price: "1500",
					color: "brown",
					createdAt: date,
					updatedAt: date
				},
				{
					title: "Prime C",
					price: "1200",
					color: "purple",
					createdAt: date,
					updatedAt: date
				},
				{
					title: "Show Management",
					price: "Reserved for ISNA",
					color: "green",
					createdAt: date,
					updatedAt: date
				}
			],
			{}
		);
		await queryInterface.bulkInsert(
			"booths",
			[
				{
					boothNo: "105",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "107",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "109",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "111",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "113",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "117",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "119",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "121",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "123",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "125",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "131",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 5
				},
				{
					boothNo: "200",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 5
				},
				{
					boothNo: "201",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 5
				},
				{
					boothNo: "204",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "205",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "206",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "207",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},

				{
					boothNo: "208",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "209",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},

				{
					boothNo: "210",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "211",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},

				{
					boothNo: "212",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "213",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "215",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},

				{
					boothNo: "216",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "217",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},

				{
					boothNo: "218",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "219",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},

				{
					boothNo: "220",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "221",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},

				{
					boothNo: "222",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "223",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},

				{
					boothNo: "224",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "225",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "227",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},

				{
					boothNo: "230",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 5
				},
				{
					boothNo: "231",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 5
				},
				{
					boothNo: "232",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 5
				},
				{
					boothNo: "300",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "301",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "304",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "305",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "306",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "307",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "308",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "309",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "310",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "311",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "312",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "313",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "314",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "316",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "317",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "318",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "319",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "320",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "321",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "322",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "323",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "324",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "325",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "326",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "327",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "330",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 5
				},
				{
					boothNo: "331",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 5
				},
				{
					boothNo: "333",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 5
				},
				{
					boothNo: "400",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "401",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "404",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "405",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "406",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "407",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "408",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "409",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "410",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "411",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "412",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "413",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "415",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "416",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "417",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "418",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "419",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "420",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "421",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "422",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "423",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "424",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "425",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "426",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "427",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "500",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "501",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "504",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "505",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "506",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "507",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},

				{
					boothNo: "508",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "509",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "510",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "511",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "512",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "513",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "514",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "516",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "517",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "518",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "519",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "520",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "521",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "522",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "523",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "524",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "525",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "526",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "527",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "530",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "531",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "532",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},

				{
					boothNo: "600",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "604",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "605",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "606",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "607",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "608",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "609",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "610",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "611",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "612",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "613",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "615",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "616",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "617",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "618",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "619",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "620",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "621",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "622",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "623",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "624",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "625",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "626",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "627",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "640",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "641",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "642",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "700",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "701",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "704",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "705",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "706",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "707",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "708",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "709",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "710",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "711",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "712",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "713",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "714",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "716",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "717",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "718",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "719",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "720",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "721",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "722",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "723",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "724",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "725",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "726",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "727",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "730",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "731",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "800",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "801",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "804",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "805",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "806",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "807",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "808",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "809",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "810",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "811",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "812",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "813",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "815",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "816",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "817",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "818",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "819",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "820",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "821",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "822",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "823",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "824",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "825",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "826",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "830",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 4
				},
				{
					boothNo: "900",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "901",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "902",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "903",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "904",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "905",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "906",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "907",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "908",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "909",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "910",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "911",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "912",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "913",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "914",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "916",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "917",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "918",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "919",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "920",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "921",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "922",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "923",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "924",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 2
				},
				{
					boothNo: "925",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "927",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "931",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 5
				},
				{
					boothNo: "932",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 5
				},
				{
					boothNo: "1001",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1003",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1004",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1005",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1006",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1008",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1009",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1010",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1011",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1012",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1013",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1016",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1017",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1018",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1019",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1020",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1021",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1022",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1023",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1024",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1025",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1026",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1100",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1101",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1102",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1104",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1105",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1108",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1109",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1110",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1111",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1112",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1113",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1116",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1118",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1120",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1122",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1200",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1201",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1202",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1204",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1208",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1210",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1212",
					createdAt: date,
					updatedAt: date,
					isActive: "H",
					boothCategoryId: 1
				},
				{
					boothNo: "1219",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "1221",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "1223",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "1225",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "1227",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "1229",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "1231",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "1232",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				},
				{
					boothNo: "1234",
					createdAt: date,
					updatedAt: date,
					isActive: "Y",
					boothCategoryId: 3
				}
			],
			{}
		);
		await queryInterface.bulkInsert(
			"advertisementCategories",
			[
				{
					title: "Print Advertiesment in Convention Program Book given to all Attendees",
					createdAt: date,
					updatedAt: date
				},
				{
					title: "Video Ad played on Big Projection Screens in the Main Hall",
					createdAt: date,
					updatedAt: date
				},
				{
					title: "Banner Advertising at the Convention",
					createdAt: date,
					updatedAt: date
				},
				{
					title: "ISNA Website Advertiesment",
					createdAt: date,
					updatedAt: date
				},
				{
					title: "Naming Rights for Session Rooms at the ISNA Convention",
					createdAt: date,
					updatedAt: date
				},
				{
					title: "Sponsorship Packages",
					createdAt: date,
					updatedAt: date
				}
			],
			{}
		);
		await queryInterface.bulkInsert(
			"advertisements",
			[
				{
					title: "Full Page Color Ad",
					price: 0,
					sampleUrl: "isna-bazaar/advertisements/full-page.png",
					createdAt: date,
					updatedAt: date,
					advertisementCategoryId: 1
				},
				{
					title: "Half Page Color Ad",
					price: 0,
					sampleUrl: "isna-bazaar/advertisements/half-page.png",
					createdAt: date,
					updatedAt: date,
					advertisementCategoryId: 1
				},
				{
					title: "Video Ad upto 20 seconds Played 8 times including Saturday Night Main Session",
					price: 0,
					sampleUrl: "isna-bazaar/advertisements/video.png",
					createdAt: date,
					updatedAt: date,
					advertisementCategoryId: 2
				},
				{
					title: "Video Ad upto 20 seconds Played 5 times not including Saturday Night Session",
					price: 0,
					sampleUrl: "isna-bazaar/advertisements/video.png",
					createdAt: date,
					updatedAt: date,
					advertisementCategoryId: 2
				},
				{
					title: "Banner Hung at a prime location at the Convention",
					price: 0,
					sampleUrl: "isna-bazaar/advertisements/banner.png",
					createdAt: date,
					updatedAt: date,
					advertisementCategoryId: 3
				},
				{
					title:
						'Your Company logo will be placed at the ISNA website until August 30, 2024. This logo will link to your website. <a target="_blank" href="https://isna.net/convention/">https://isna.net/convention/</a>',
					price: 0,
					sampleUrl: "isna-bazaar/advertisements/website.png",
					createdAt: date,
					updatedAt: date,
					advertisementCategoryId: 4
				},
				{
					title:
						'We have created three sponsorship tiers to offer your organization/company a chance for promotion and recognition. Below is the Sponsorship Brochure for your reference. <br><br><a target="_blank" href="https://d3mkptw35kfza.cloudfront.net/isna-bazaar/advertisements/sponsorship.pdf" class="button button-sample btn-light p-0" style="width: 80px;">Sponsorship Brochure</a><br><br>We also offer customized sponsorship packages according to your budget and needs.',
					price: 0,
					sampleUrl: null,
					createdAt: date,
					updatedAt: date,
					advertisementCategoryId: 6
				}
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {}
};
