import { Application, Request, Response } from "express";
import DemoResponse from "../../schema/demo-response";

const demoRoutes = (app: Application) => {
	app.get("/api/test", async (r: Request, s: Response<DemoResponse>) => {
		s.status(200).send({
			success: true,
			extra: r.query["extra"]?.toString(),
		});
	});
};

export default demoRoutes;
