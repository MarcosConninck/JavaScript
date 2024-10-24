const Sequelize = require("sequelize");
const db = require("../db/connection"); // .. sobe uma pasta
const sequelize = require("../db/connection");

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
	new_job: {
		type: Sequelize.INTEGER,
	},
	createdAt: {
		type: Sequelize.STRING,
		allowNull: false,
		defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
	},
	updatedAt: {
		type: Sequelize.STRING,
		allowNull: false,
		defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
	},
	description: {
		type: Sequelize.STRING,
	},
});

module.exports = Job;
