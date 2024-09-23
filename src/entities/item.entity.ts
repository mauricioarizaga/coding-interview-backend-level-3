import { Sequelize, DataTypes } from "sequelize";
const sequelize = new Sequelize("sqlite::memory:");

export const Item = sequelize.define(
	"Item",
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			unique: true,
			autoIncrement: true,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		price: {
			type: DataTypes.FLOAT(50, 3),
			allowNull: false,
			validate: {
				isNumeric: true,
				min: 0,
				notIn: [[0]]
			}
		}
	},
	{
		modelName: "Items"
	}
);
