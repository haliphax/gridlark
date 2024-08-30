import { DataSource } from "typeorm";
import User from "./entities/user";

const dataSource = new DataSource({
	type: "postgres",
	host: process.env.DB_HOST ?? "db",
	username: process.env.DB_USER ?? "gridlark",
	password: process.env.DB_PASS ?? "gridlark",
	database: process.env.DB_NAME ?? "gridlark",
	entities: [User],
});

await dataSource.initialize();

export default dataSource;
