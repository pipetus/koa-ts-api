import * as config from 'config'
import * as Koa from 'koa'

export class Loader {
  private static instance: Loader;
  config: config.IConfig;

  private constructor() {
    this.config = config;
  }

  public static getInstance(): Loader {
    if (!Loader.instance) {
      Loader.instance = new Loader();
    }
    return Loader.instance;
  }

  public get(key?: string): any {
    if (key) {
      return this.config.get(key);
    } else {
      return this.config;
    }
  }

  configure(callback: (config: config.IConfig) => void) {
    callback(this.config);
  }
}
