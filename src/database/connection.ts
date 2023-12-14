import 'reflect-metadata'
import { DataSource } from 'typeorm'
import * as dotenv from 'dotenv'
import dataSource from './datasource'

const connection: Promise<DataSource> = dataSource.initialize()

export default connection