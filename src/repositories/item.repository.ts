import { Item } from "../entities";
import { saveDto } from "./dto/dtoSave";

export const createItemRepository = async (payload) => {
	try {
		return await Item.create(payload);
	} catch (error) {
		throw new Error(error);
	}
};
