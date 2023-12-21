import 'reflect-metadata';
import dataSource from "../../database/datasource";

export class DbHelper {
  private static instance: DbHelper;

  private constructor() {}

  public static getInstance(): DbHelper {
    if (!DbHelper.instance) {
      DbHelper.instance = new DbHelper();
    }

    return DbHelper.instance;
  }

  private dbConnection: any;

  async setup() {
    try {
      this.dbConnection = await dataSource.initialize();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async teardown() {
    await this.dbConnection.close();
  }
}
