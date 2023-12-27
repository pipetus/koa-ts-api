import * as HttpStatus from 'http-status-codes';
import { RouterContext } from '../router';
import { Loader as ConfigLoader } from '../../config/loader';
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
          config: ConfigLoader.getInstance().get()
        }
      }
    };
    ctx.status = HttpStatus.StatusCodes.OK;
  }
}

export default new HealthController();
