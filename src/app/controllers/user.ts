import { Context } from 'koa'
import * as HttpStatus from 'http-status-codes';

class UserController {
  async index(ctx: Context) {
    ctx.body = [];
    ctx.status = HttpStatus.StatusCodes.OK;
  }

  async create(ctx: Context) {
    ctx.body = {};
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