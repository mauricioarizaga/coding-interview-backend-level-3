export const validateUpdateItem = (body) => {
	const { price } = body;

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
