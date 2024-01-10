import { DefaultState } from 'koa';
import Router from 'koa-router';
import { UserController } from '../controllers';
import { RouterContext } from '../router';

const routerOpts: Router.IRouterOptions = {
  prefix: '/users',
};

const router: Router = new Router<DefaultState, RouterContext>(routerOpts);

router.get('/', UserController.index);
router.get('/:id', UserController.show);
router.post('/', UserController.create);
router.put('/:id', UserController.update);
router.patch('/:id', UserController.update);
router.delete('/:id', UserController.destroy);

export default router;
