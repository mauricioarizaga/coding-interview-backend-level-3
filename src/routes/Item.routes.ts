import { createItemHandler } from "../controllers/index";
const apiPrefixPath = `/item`;
export const createItem = {
	method: "POST",
	path: `${apiPrefixPath}`,
	options: {
		handler: createItemHandler
	}
};

/* export const getItmes = {
	method: "POST",
	path: `${apiPrefixPath}`,
	options: {
		handler: getItemsHandler
	}
}; */
