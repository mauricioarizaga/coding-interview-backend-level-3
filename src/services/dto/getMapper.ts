import { responseSaveDto } from "./createDto";

export const responseGetAllDto = (items: any[]) => {
	if (items.length === 0) {
		return items;
	}
	const itemsMap = items.map((item) => {
		return responseSaveDto(item);
	});
	return itemsMap;
};

export const responseGetByIdDto = (item) => {
	if (!item) {
		return item;
	}
	return responseSaveDto(item);
};
