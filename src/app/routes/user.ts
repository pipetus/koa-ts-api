import { DefaultState } from 'koa';
import Router from 'koa-router';
import { Container } from 'typedi';
import DataSource from '../../database/datasource';
import { UserController } from '../controllers';
import { Role, User } from '../models';
import { RouterContext } from '../router';

const UserRepository = DataSource.getRepository(User);
const RoleRepository = DataSource.getRepository(Role);
const routerOpts: Router.IRouterOptions = {
  prefix: '/users',
};

// TODO: Centralize this in one file which will be called in main.ts
Container.set('UserRepository', UserRepository);
Container.set('RoleRepository', RoleRepository);

const controller = Container.get<UserController>(UserController);
const router: Router = new Router<DefaultState, RouterContext>(routerOpts);

router.get('/', (ctx: RouterContext) => controller.index(ctx));
router.get('/:id', (ctx: RouterContext) => controller.show(ctx));
router.post('/', (ctx: RouterContext) => controller.create(ctx));
router.put('/:id', (ctx: RouterContext) => controller.update(ctx));
router.delete('/:id', (ctx: RouterContext) => controller.destroy(ctx));

export default router;
