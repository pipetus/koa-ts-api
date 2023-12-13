import * as Router from 'koa-router';
import user from '../controllers/user';

const routerOpts: Router.IRouterOptions = {
  prefix: '/user'
};

const router: Router = new Router(routerOpts);

router.get('/', user.index);

export default router;