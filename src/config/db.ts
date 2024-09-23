import { Item } from "../entities";

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "database.sqlite"
});
export const initDb = async () => {
	await Item.sync({ alter: true });
	await sequelize.authenticate();
};
