import { Item } from "../entities";

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "src/sqlite.db"
});
export const initDb = async () => {
	await Item.sync({ alter: true, logging: false });

	await sequelize.authenticate();
};
