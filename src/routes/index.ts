import {
	createItem,
	getAllItems,
	getItemById,
	updateItemById,
	deleteItemById
} from "./Item.routes";
import { getPing } from "./ping.routes";
export const routes = [
	getPing,
	createItem,
	getAllItems,
	getItemById,
	updateItemById,
	deleteItemById
];
