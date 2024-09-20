export const createItemHandler = async (request, h) => {
	try {
		const { body } = request;
		await createItemService(body);
	} catch (error) {
		new Error(error);
	}
};
