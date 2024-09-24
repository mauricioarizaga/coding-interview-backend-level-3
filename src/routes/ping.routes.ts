export const getPing = {
	method: "GET",
	path: "/ping",
	handler: () => {
		return { ok: true };
	}
};
/* export const testRoute = {
	method: "GET",
	path: "/test",
	handler: () => {
		return { status: "Server Up and Running" };
	}
};
 */
