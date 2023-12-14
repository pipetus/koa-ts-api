import { Context } from 'koa'
import * as HttpStatus from 'http-status-codes';
import UserRepository from '../repositories/user_repository';
import User from '../models/user';

class UserController {
  async index(ctx: Context) {
    const users = await (new UserRepository()).findAll();
    ctx.body = {
      data: users
    }
    ctx.status = HttpStatus.StatusCodes.OK;
  }

  async create(ctx: Context) {
    const user = await (new UserRepository()).create(ctx.request.body as User);
    ctx.body = {
      data: user
    }
    ctx.status = HttpStatus.StatusCodes.CREATED;
  }

  async show(ctx: Context) {
    ctx.body = {};
    ctx.status = HttpStatus.StatusCodes.OK;
  }

  async update(ctx: Context) {
    ctx.body = {};
    ctx.status = HttpStatus.StatusCodes.OK;
  }

  async destroy(ctx: Context) {
    ctx.body = {};
    ctx.status = HttpStatus.StatusCodes.NO_CONTENT;
  }
}

export default new UserController();