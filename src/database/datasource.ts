import * as dotenv from 'dotenv'
import { DataSource } from 'typeorm'

dotenv.config()

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [`${__dirname}/../app/models/*.ts`],
  migrations: [`${__dirname}/migrations/*.{j,t}s`],
})