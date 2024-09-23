import { Request } from "@hapi/hapi";
import { createItemService } from "../services";

export const createItemHandler = async (request: Request, h) => {
	try {
		const body = request.payload;

		//	console.log(request.payload);
		console.log(body);
		return await createItemService(body);
	} catch (error) {
		throw new Error(error);
	}
};
