import * as HttpStatus from 'http-status-codes';
import { RouterContext } from '../router';
import * as config from 'config'

export class HealthController {
  async index(ctx: RouterContext) {
    ctx.status = HttpStatus.StatusCodes.NO_CONTENT;
  }

  async show(ctx: RouterContext) {
    ctx.body = {
      data: {
        type: 'health',
        id: '1',
        attributes: {
          name: 'koa-ts-api',
          version: '1.0.0',
          security: config.get('security')
        }
      }
    };
    ctx.status = HttpStatus.StatusCodes.OK;
  }
}

export default new HealthController();
