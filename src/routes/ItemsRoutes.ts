import {
	getFxRateController,
	getAllFxRateController
} from "../controllers/index";
const apiPrefixPath = `v1/item`;
export const createItem = {
	method: "GET",
	path: `${apiPrefixPath}`,
	options: {
		handler: getAllFxRateController
	}
};
export const fxGETFeeRateRoutes = {
	method: "GET",
	path: `${apiPrefixPath}/fee/{fee}`,
	options: {
		handler: getFxRateController,
		description: "Save Fixer Rates",
		notes: "Return the object saved in Mongo",
		tags: ["api"]
	}
};
export const TestRoutes = {
	method: "GET",
	path: "/test",
	handler: () => {
		return { status: "Server Up and Running" };
	}
};
