import HttpStatus from 'http-status-codes';
import { Service } from 'typedi';
import { User } from '../models';
import { RouterContext } from '../router';
import { UserSerializer } from '../serializers';
import { UserService } from '../services';

@Service()
export class UserController {
  constructor(private readonly userService: UserService) {}

  async index(ctx: RouterContext) {
    const users = await this.userService.findAll();

    ctx.body = new UserSerializer(users).data();
    ctx.status = HttpStatus.OK;
  }

  async create(ctx: RouterContext) {
    const payload = ctx.request?.body;

    if (!payload) {
      return;
    }

    const user = await this.userService.create(payload as User);

    ctx.body = new UserSerializer(user).data();
    ctx.status = HttpStatus.CREATED;
  }

  async show(ctx: RouterContext) {
    const user = await this.userService.findById(Number(ctx.params.id));

    if (!user) {
      ctx.throw(HttpStatus.NOT_FOUND);
    }

    ctx.body = new UserSerializer(user).data();
    ctx.status = HttpStatus.OK;
  }

  async update(ctx: RouterContext) {
    const user = await this.userService.findById(Number(ctx.params.id));

    if (!user) {
      ctx.throw(HttpStatus.NOT_FOUND);
    }

    const updated = await this.userService.update(
      Object.assign(user, ctx.request.body),
    );

    ctx.body = new UserSerializer(updated).data();
    ctx.status = HttpStatus.OK;
  }

  async destroy(ctx: RouterContext) {
    await this.userService.delete(Number(ctx.params.id));

    ctx.status = HttpStatus.NO_CONTENT;
  }
}
