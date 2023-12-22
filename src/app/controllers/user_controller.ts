import * as HttpStatus from 'http-status-codes';
import UserRepository from '../repositories/user_repository';
import User from '../models/user';
import UserSerializer from '../serializers/user_serializer';
import { RouterContext } from '../router';

export class UserController {
  async index(ctx: RouterContext) {
    const users = await (new UserRepository()).findAll();

    ctx.body = new UserSerializer(users).data();
    ctx.status = HttpStatus.StatusCodes.OK;
  }

  async create(ctx: RouterContext) {
    const user = await (new UserRepository()).create(ctx.request.body as User);

    ctx.body = new UserSerializer(user).data();
    ctx.status = HttpStatus.StatusCodes.CREATED;
  }

  async show(ctx: RouterContext) {
    const user = await (new UserRepository()).findById(Number(ctx.params.id));

    if (!user) {
      ctx.throw(HttpStatus.StatusCodes.NOT_FOUND);
    }

    ctx.body = new UserSerializer(user).data();
    ctx.status = HttpStatus.StatusCodes.OK;
  }

  async update(ctx: RouterContext) {
    const user = await (new UserRepository()).findById(Number(ctx.params.id));

    if (!user) {
      ctx.throw(HttpStatus.StatusCodes.NOT_FOUND);
    }

    const updated = await (new UserRepository()).update(Object.assign(user, ctx.request.body));

    ctx.body = new UserSerializer(updated).data();
    ctx.status = HttpStatus.StatusCodes.OK;
  }

  async destroy(ctx: RouterContext) {
    await (new UserRepository()).delete(Number(ctx.params.id));

    ctx.status = HttpStatus.StatusCodes.NO_CONTENT;
  }
}

export default new UserController();
