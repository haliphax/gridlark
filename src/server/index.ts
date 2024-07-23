import compression from "compression";
import cookieParser from "cookie-parser";
import express, { Request, Response } from "express";
import { createHttpTerminator } from "http-terminator";

const host = process.env.host ?? "localhost";
const port = parseInt(process.env.port ?? "8000");
const app = express();

app.use(compression());
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(express.static("dist/html"));

app.disable("x-powered-by");

// demo dynamic endpoint
app.get("/api/test", async (r: Request, s: Response) => {
	s.status(200).send({
		success: true,
		extra: r.query["extra"],
	});
});

const server = app.listen(port, host, () => {
	console.log(`Server listening @ http://${host}:${port}`);
});
const terminator = createHttpTerminator({ server });
const shutdown = async () => {
	console.log("Shutting down");
	await terminator.terminate();
	process.exit(0);
};

["SIGINT", "SIGTERM"].forEach((signal) => process.on(signal, shutdown));
