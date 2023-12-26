import * as Router from 'koa-router';
import health from '../controllers/health_controller';
import { DefaultState } from 'koa';
import { RouterContext } from '../router';

const routerOpts: Router.IRouterOptions = {
  prefix: '/health'
};

// const router: Router = new Router(routerOpts);
const router: Router = new Router<DefaultState, RouterContext>(routerOpts);

router.get('/', health.index);

if (/development|local/.test(process.env.NODE_ENV)) {
  router.get('/config', health.show);
}

export default router;
