import { Context } from 'koa'
import * as HttpStatus from 'http-status-codes';

export default async (ctx: Context, next: () => Promise<any>) => {
  ctx.body = 'Hello World';
  ctx.status = HttpStatus.StatusCodes.OK;
}