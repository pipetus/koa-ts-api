import { Context } from 'koa'
import * as HttpStatus from 'http-status-codes';

export default {
  async index(ctx: Context) {
    ctx.body = [];
    ctx.status = HttpStatus.StatusCodes.OK;
  }
}