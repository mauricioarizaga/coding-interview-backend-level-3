import {
	createItemRepository,
	deleteItemByIdRepository,
	getAllItemsRepository,
	getItemByIdRepository,
	updateItemByIdRepository
} from "../repositories";
import { responseSaveDto } from "./dto/createDto";
import { responseGetAllDto, responseGetByIdDto } from "./dto/getMapper";

export const createItemService = async (body) => {
	try {
		const item = await createItemRepository(body);
		const responseSave = responseSaveDto(item);
		return responseSave;
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
};
export const getAllItemsService = async () => {
	try {
		const items = await getAllItemsRepository();
		const responseGetAll = responseGetAllDto(items);
		return responseGetAll;
	} catch (error) {
		throw new Error(error);
	}
};

export const getItemByIdService = async (id: number) => {
	try {
		const item = await getItemByIdRepository(id);
		const responseMapper = responseGetByIdDto(item);
		return responseMapper;
	} catch (error) {
		throw new Error(error);
	}
};

export const updateItemByIdService = async (id: number, body) => {
	try {
		await updateItemByIdRepository(id, body);
		const item = await getItemByIdRepository(id);
		const responseMapper = responseGetByIdDto(item);
		return responseMapper;
	} catch (error) {
		throw new Error(error);
	}
};

export const deleteItemByIdService = async (id: number) => {
	try {
		const response = await deleteItemByIdRepository(id);
		console.log(response);
		const item = await getItemByIdRepository(id);
		const responseMapper = responseGetByIdDto(item);
		return responseMapper;
	} catch (error) {
		throw new Error(error);
	}
};
