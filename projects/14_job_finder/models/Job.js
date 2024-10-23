const Sequelize = require("sequelize");
const db = require("../db/connection"); // .. sobe uma pasta

const Job = db.define("Job", {
	title: {
		type: Sequelize.STRING,
	},
	salary: {
		type: Sequelize.STRING,
	},
	company: {
		type: Sequelize.STRING,
	},
	email: {
		type: Sequelize.STRING,
	},
	new: {
		type: Sequelize.INTEGER,
	},
	createdAt: {
		type: Sequelize.STRING,
	},
	updatedAt: {
		type: Sequelize.STRING,
	},
});

module.exports = Job;
