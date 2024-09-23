import { initServer, start } from "./server";

initServer().then(async () => {
	await start();
});
