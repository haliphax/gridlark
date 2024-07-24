import compression from "compression";
import cookieParser from "cookie-parser";
import express from "express";
import { createHttpTerminator } from "http-terminator";
import "reflect-metadata";
import routes from "./routes";

// configure application
const app = express();
app.use(compression());
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(express.static("dist/html"));

// remove server info header
app.disable("x-powered-by");

// bind API routes
routes(app);

// configure server
const host = process.env.host ?? "localhost";
const port = parseInt(process.env.port ?? "8000");
const server = app.listen(port, host, () => {
	console.log(`Server listening @ http://${host}:${port}`);
});

// shutdown sequence
const terminator = createHttpTerminator({ server });
const shutdown = async () => {
	console.log("Shutting down");
	await terminator.terminate();
	process.exit(0);
};

// bind shutdown sequence to signals
["SIGINT", "SIGTERM"].forEach((signal) => process.on(signal, shutdown));
