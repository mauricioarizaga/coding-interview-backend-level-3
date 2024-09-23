import { createItemRepository, getAllItemsRepository } from "../repositories";

export const createItemService = async (body) => {
	try {
		return await createItemRepository(body);
	} catch (error) {
		throw new Error(error);
	}
};
export const getAllItemsService = async () => {
	try {
		const items = await getAllItemsRepository();
		if (items.length === 0) {
			return { items, message: "Items not Found" };
		}
		return { items };
	} catch (error) {
		throw new Error(error);
	}
};
