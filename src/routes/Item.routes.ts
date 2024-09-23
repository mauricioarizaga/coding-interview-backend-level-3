const Joi = require("joi");
import { createItemHandler, getAllItemsHandler } from "../controllers/index";
const apiPrefixPath = `/item`;
export const createItem = {
	method: "POST",
	path: `${apiPrefixPath}`,
	options: {
		handler: createItemHandler,
		validate: {
			payload: Joi.object().keys({
				name: Joi.string().alphanum().min(3).max(50).required(),
				price: Joi.number()
					.positive()
					.min(0)
					.required()
					.error(() => {
						return {
							errorMessage: "price requires a positive number"
						};
					})
			})
		}
	}
};
export const getAllItems = {
	method: "GET",
	path: `${apiPrefixPath}`,
	options: {
		handler: getAllItemsHandler
	}
};
