import HttpStatus from 'http-status-codes';
import { RouterContext } from '../router';

class HealthController {
  async index(ctx: RouterContext) {
    ctx.status = HttpStatus.NO_CONTENT;
  }

  async show(ctx: RouterContext) {
    ctx.status = HttpStatus.OK;
    ctx.body = {
      data: {
        type: 'health',
        id: '1',
        attributes: {
          name: 'koa-ts-api',
          version: '1.0.0',
          csrf: ctx.state._csrf,
        },
      },
    };
  }
}

export default new HealthController();
