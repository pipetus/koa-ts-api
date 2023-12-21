import * as dotenv from 'dotenv'
import { DataSource } from 'typeorm'

const env = process.env.NODE_ENV === 'test' ? '.env.test.local' : '.env'

dotenv.config({
  path: env,
  override: true,
})

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