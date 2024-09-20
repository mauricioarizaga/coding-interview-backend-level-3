import Hapi from "@hapi/hapi";
import { routes } from "./routes/index";

const getServer = () => {
	const server = Hapi.server({
		host: "localhost",
		port: 8080
	});
	server.route(routes);
	return server;
};

export const initializeServer = async () => {
	const server = getServer();
	await server.initialize();
	return server;
};

export const startServer = async () => {
	const server = getServer();

	await server.start();
	console.log(`Server running on ${server.info.uri}`);
	return server;
};
