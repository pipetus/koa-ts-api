import dataSource from "../../database/datasource";

export class TestHelper {
  private static instance: TestHelper;

  private constructor() {}

  public static getInstance(): TestHelper {
    if (!TestHelper.instance) {
      TestHelper.instance = new TestHelper();
    }

    return TestHelper.instance;
  }

  private dbConnection: any;

  async setup() {
    this.dbConnection = await dataSource.initialize();
  }

  async teardown() {
    await this.dbConnection.close();
  }
}