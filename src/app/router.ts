import Koa, { DefaultState, Context, ParameterizedContext } from 'koa';
import { IRouterParamContext } from 'koa-router';
import fs from 'fs';
import path from 'path';

export type RouterContext = ParameterizedContext<
  DefaultState,
  Context & IRouterParamContext<DefaultState, Context>
>;

export default (app: Koa) => {
  const routesPath = path.join(__dirname, 'routes');

  fs.readdirSync(routesPath).forEach(async (file) => {
    const routeFilePath = path.join(routesPath, file);
    const route = (await import(routeFilePath)).default;

    // Register the route with the app
    app.use(route.routes()).use(route.allowedMethods());
  });
};
