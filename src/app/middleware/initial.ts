import * as HttpStatus from 'http-status-codes';
import { Context, Next } from 'koa';

export const initial = async (ctx: Context, next: Next) => {
  ctx.body = 'Hello World';
  ctx.status = HttpStatus.StatusCodes.OK;

  next();
};
