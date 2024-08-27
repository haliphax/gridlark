import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Unique("uq_user_fields", ["name", "email"])
@Entity()
export default class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ length: 128 })
	email: string;

	@Column({ length: 32 })
	name: string;

	@Column({ length: 32 })
	password: string;
}
