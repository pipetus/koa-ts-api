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
  entities: ['src/models/*.ts'],
  migrations: ['src/database/migrations/*.ts'],
})