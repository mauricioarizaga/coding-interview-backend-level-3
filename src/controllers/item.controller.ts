import { Request } from "@hapi/hapi";
import { createItemService } from "../services";

export const createItemHandler = async (request: Request, h) => {
	try {
		const body = request.payload;

		return await createItemService(body);
	} catch (error) {
		throw new Error(error);
	}
};

export const getAllItemsHandler = async (request: Request, h) => {
	try {
		//	return await createItemService(body);
	} catch (error) {
		throw new Error(error);
	}
};
