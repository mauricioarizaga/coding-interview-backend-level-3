import { Request } from "@hapi/hapi";
import {
	createItemService,
	deleteItemByIdService,
	getAllItemsService,
	getItemByIdService,
	updateItemByIdService
} from "../services";
import { validateCreateItem } from "./validation/createItem.validators";
import { validateUpdateItem } from "./validation/updateItem.validators";

export const createItemHandler = async (request: Request, h) => {
	try {
		const body = request.payload;

		const validateReq = validateCreateItem(body);
		if (validateReq.errors.length > 0) {
			return h
				.response({ errors: validateReq.errors })
				.code(validateReq.statusCode);
		}

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
		let statusCode;
		if (responseData) {
			statusCode = 200;
		} else {
			statusCode = 404;
		}

		return h.response(responseData).code(statusCode);
	} catch (error) {
		throw new Error(error);
	}
};

export const updateItemByIdHandler = async (request: Request, h) => {
	try {
		const id = request.params.id;
		const body = request.payload;

		const validateReq = validateUpdateItem(body);
		if (validateReq.errors.length > 0) {
			return h
				.response({ errors: validateReq.errors })
				.code(validateReq.statusCode);
		}

		const responseData = await updateItemByIdService(Number(id), body);
		return h.response(responseData).code(200);
	} catch (error) {
		throw new Error(error);
	}
};

export const deleteItemByIdHandler = async (request: Request, h) => {
	try {
		const id = request.params.id;

		const responseData = await deleteItemByIdService(Number(id));
		return h.response(responseData).code(204);
	} catch (error) {
		throw new Error(error);
	}
};
