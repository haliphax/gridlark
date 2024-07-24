import { Application } from "express";
import demoRoutes from "./api/demo";

const routes = (app: Application) => {
	demoRoutes(app);
};

export default routes;
