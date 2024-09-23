import { createItemRepository } from "../repositories";

export const createItemService = async (body) => {
	try {
		return await createItemRepository(body);
	} catch (error) {
		throw new Error(error);
	}
};
