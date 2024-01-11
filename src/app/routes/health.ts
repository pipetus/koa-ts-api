import { DefaultState } from 'koa';
import Router from 'koa-router';
import { Container } from 'typedi';
import { HealthController } from '../controllers';
import { RouterContext } from '../router';

const routerOpts: Router.IRouterOptions = {
  prefix: '/health',
};

const controller = Container.get<HealthController>(HealthController);
const router: Router = new Router<DefaultState, RouterContext>(routerOpts);

router.get('/', (ctx: RouterContext) => controller.index(ctx));

export default router;
