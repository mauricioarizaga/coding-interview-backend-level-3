import { Item } from "../entities";

export const createItemRepository = async (payload) => {
	try {
		return await Item.create(payload);
	} catch (error) {
		throw new Error(error);
	}
};

export const getAllItemsRepository = async () => {
	try {
		return await Item.findAll();
	} catch (error) {
		throw new Error(error);
	}
};

export const getItemByIdRepository = async (id: number) => {
	try {
		const dataQuery = { where: { id } };
		return await Item.findOne(dataQuery);
	} catch (error) {
		throw new Error(error);
	}
};

export const updateItemByIdRepository = async (id: number, body) => {
	try {
		const dataQuery = { where: { id } };
		return await Item.update(body, dataQuery);
	} catch (error) {
		throw new Error(error);
	}
};
export const deleteItemByIdRepository = async (id: number) => {
	try {
		const dataQuery = { where: { id } };
		return await Item.destroy(dataQuery);
	} catch (error) {
		throw new Error(error);
	}
};
