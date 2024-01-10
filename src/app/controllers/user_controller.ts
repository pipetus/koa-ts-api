import HttpStatus from 'http-status-codes';
import { User } from '../models';
import { UserRepository } from '../repositories';
import { RouterContext } from '../router';
import { UserSerializer } from '../serializers';

class UserController {
  async index(ctx: RouterContext) {
    const users = await new UserRepository().findAll();

    ctx.body = new UserSerializer(users).data();
    ctx.status = HttpStatus.OK;
  }

  async create(ctx: RouterContext) {
    const user = await new UserRepository().create(ctx.request.body as User);

    ctx.body = new UserSerializer(user).data();
    ctx.status = HttpStatus.CREATED;
  }

  async show(ctx: RouterContext) {
    const user = await new UserRepository().findById(Number(ctx.params.id));

    if (!user) {
      ctx.throw(HttpStatus.NOT_FOUND);
    }

    ctx.body = new UserSerializer(user).data();
    ctx.status = HttpStatus.OK;
  }

  async update(ctx: RouterContext) {
    const user = await new UserRepository().findById(Number(ctx.params.id));

    if (!user) {
      ctx.throw(HttpStatus.NOT_FOUND);
    }

    const updated = await new UserRepository().update(
      Object.assign(user, ctx.request.body),
    );

    ctx.body = new UserSerializer(updated).data();
    ctx.status = HttpStatus.OK;
  }

  async destroy(ctx: RouterContext) {
    await new UserRepository().delete(Number(ctx.params.id));

    ctx.status = HttpStatus.NO_CONTENT;
  }
}

export default new UserController();
