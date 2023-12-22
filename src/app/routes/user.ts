import * as Router from 'koa-router';
import user from '../controllers/user_controller';
import { DefaultState, Context } from 'koa';
import { RouterContext } from '../router';

const routerOpts: Router.IRouterOptions = {
  prefix: '/users'
};

// const router: Router = new Router(routerOpts);
const router: Router = new Router<DefaultState, RouterContext>(routerOpts);

router.get('/', user.index);
router.get('/:id', user.show);
router.post('/', user.create);
router.put('/:id', user.update);
router.patch('/:id', user.update);
router.delete('/:id', user.destroy);

export default router;
