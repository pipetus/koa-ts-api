import { Spec } from 'koa-joi-router';
import { Container } from 'typedi';
import DataSource from '../../database/datasource';
import { UserController } from '../controllers';
import { authentication } from '../middlewares';
import { Role, User } from '../models';
import { RouterContext } from '../router';
import { validateGetAllUsers } from '../validators';

const UserRepository = DataSource.getRepository(User);
const RoleRepository = DataSource.getRepository(Role);

// TODO: Centralize this in one file which will be called in main.ts
Container.set('UserRepository', UserRepository);
Container.set('RoleRepository', RoleRepository);

const controller = Container.get<UserController>(UserController);

export const userRoutes: Spec[] = [
  {
    method: 'get',
    path: '/users',
    pre: authentication,
    validate: validateGetAllUsers,
    handler: (ctx: RouterContext) => controller.index(ctx),
  },
  {
    method: 'get',
    path: '/users/:id',
    pre: authentication,
    handler: (ctx: RouterContext) => controller.show(ctx),
  },
  {
    method: 'post',
    path: '/users',
    pre: authentication,
    handler: (ctx: RouterContext) => controller.create(ctx),
  },
  {
    method: 'put',
    path: '/users/:id',
    pre: authentication,
    handler: (ctx: RouterContext) => controller.update(ctx),
  },
  {
    method: 'delete',
    path: '/users/:id',
    pre: authentication,
    handler: (ctx: RouterContext) => controller.destroy(ctx),
  },
];
