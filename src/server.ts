import Hapi from "@hapi/hapi";
import { Server } from "@hapi/hapi";
import { routes } from "./routes/";
import { initDb } from "./config/db";

export let server: Server;

export const initServer = async () => {
	try {
		server = Hapi.server({
			port: process.env.PORT || 4000,
			host: "localhost"
		});
		server.route(routes as []);
		await initDb();

		return server;
	} catch (error) {
		console.log(error);
	}
};

export const initializeServer = async () => {
	const server = await initServer();
	await server.initialize();
	return server;
};

export const start = async () => {
	console.log(`Listening on ${server.settings.host}:${server.settings.port}`);
	return server.start();
};

process.on("unhandledRejection", (err) => {
	console.error("unhandledRejection");
	console.error(err);
	process.exit(1);
});
