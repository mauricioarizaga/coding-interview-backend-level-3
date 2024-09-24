export const validateCreateItem = (body) => {
	const { name, price } = body;
	if (!price) {
		return {
			errors: [
				{
					field: "price",
					message: 'Field "price" is required'
				}
			],
			statusCode: 400
		};
	}
	if (!name) {
		return {
			errors: [
				{
					field: "name",
					message: 'Field "name" is required'
				}
			],
			statusCode: 400
		};
	}

	if (price < 0) {
		return {
			errors: [
				{
					field: "price",
					message: 'Field "price" cannot be negative'
				}
			],
			statusCode: 400
		};
	}
	return {
		errors: []
	};
};
