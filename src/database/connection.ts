import 'reflect-metadata'
import { DataSource } from 'typeorm'
import dataSource from './datasource'

const connection: Promise<DataSource> = dataSource.initialize()

export default connection
