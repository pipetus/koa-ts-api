import Koa, { DefaultState, Context, ParameterizedContext } from 'koa';
import Router from 'koa-joi-router';
import { IRouterParamContext } from 'koa-router';
import * as routes from './routes';

export type RouterContext = ParameterizedContext<
  DefaultState,
  Context & IRouterParamContext<DefaultState, Context>
>;

export default (app: Koa) => {
  const router = Router();

  router.route(Object.values(routes).flat());
  app.use(router.middleware());
};
