import { DataSource } from "typeorm";
import User from "./entities/user";

const dataSource = new DataSource({
	type: "postgres",
	host: "db",
	username: "gridlark",
	password: "gridlark",
	database: "gridlark",
	entities: [User],
});

await dataSource.initialize();

export default dataSource;
