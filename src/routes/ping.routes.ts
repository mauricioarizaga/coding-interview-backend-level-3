export const getPing = {
	method: "GET",
	path: "/ping",
	handler: () => {
		return { status: "ok" };
	}
};
