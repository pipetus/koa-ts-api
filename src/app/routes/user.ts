import Router from 'koa-router';
import { Container } from 'typedi';
import { UserController } from '../controllers';
import { RouterContext } from '../router';

const routerOpts: Router.IRouterOptions = {
  prefix: '/users',
};

const controller = Container.get<UserController>(UserController);
const router: Router = new Router<unknown, RouterContext>(routerOpts);

router.get('/', (ctx: RouterContext) => controller.index(ctx));
router.get('/:id', (ctx: RouterContext) => controller.show(ctx));
router.post('/', (ctx: RouterContext) => controller.create(ctx));
router.put('/:id', (ctx: RouterContext) => controller.update(ctx));
router.delete('/:id', (ctx: RouterContext) => controller.destroy(ctx));

export default router;
