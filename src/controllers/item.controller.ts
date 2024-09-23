import { Request } from "@hapi/hapi";
import { createItemService, getAllItemsService } from "../services";

export const createItemHandler = async (request: Request, h) => {
	try {
		const body = request.payload;

		return await createItemService(body);
	} catch (error) {
		throw new Error(error);
	}
};

export const getAllItemsHandler = async () => {
	try {
		return await getAllItemsService();
	} catch (error) {
		throw new Error(error);
	}
};
