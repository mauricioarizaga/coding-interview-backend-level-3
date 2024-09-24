import {
	createItemHandler,
	getAllItemsHandler,
	getItemByIdHandler,
	updateItemByIdHandler,
	deleteItemByIdHandler
} from "../controllers/index";

const apiPrefixPath = `/items`;

export const createItem = {
	method: "POST",
	path: `${apiPrefixPath}`,
	options: {
		handler: createItemHandler
	}
};

export const getAllItems = {
	method: "GET",
	path: `${apiPrefixPath}`,
	options: {
		handler: getAllItemsHandler
	}
};

export const getItemById = {
	method: "GET",
	path: `${apiPrefixPath}/{id}`,
	options: {
		handler: getItemByIdHandler
	}
};

export const updateItemById = {
	method: "PUT",
	path: `${apiPrefixPath}/{id}`,
	options: {
		handler: updateItemByIdHandler
	}
};

export const deleteItemById = {
	method: "DELETE",
	path: `${apiPrefixPath}/{id}`,
	options: {
		handler: deleteItemByIdHandler
	}
};
