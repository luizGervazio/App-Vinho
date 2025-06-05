import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'ejdvg1996',
  database: 'aaaa',
  entities: ["./src/entities/*.ts"],
  migrations: [
    "./src/config/migrations/*.ts",
  ],
  synchronize: false,
});