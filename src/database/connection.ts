import 'reflect-metadata'
import { DataSource } from 'typeorm'
import * as dotenv from 'dotenv'

dotenv.config()

// TODO: split?
const dataSource: DataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['src/models/*.ts'],
  // migrations: ['src/database/migrations/*.ts'],
  // cli: {
  //   migrationsDir: 'src/database/migrations'
  // }
})

const connection: Promise<DataSource> = dataSource.initialize()

export default connection