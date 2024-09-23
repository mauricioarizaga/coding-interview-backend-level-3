import { Request } from "@hapi/hapi";
import {
	createItemService,
	getAllItemsService,
	getItemByIdService
} from "../services";

export const createItemHandler = async (request: Request, h) => {
	try {
		const body = request.payload;

		const responseData = await createItemService(body);
		return h.response(responseData).code(201);
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

export const getItemByIdHandler = async (request: Request, h) => {
	try {
		const id = request.params.id;

		const responseData = await getItemByIdService(Number(id));
		return h.response(responseData).code(200);
	} catch (error) {
		throw new Error(error);
	}
};
