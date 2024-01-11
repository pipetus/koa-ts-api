import HttpStatus from 'http-status-codes';
import { Service } from 'typedi';
import { RouterContext } from '../router';

@Service()
export class HealthController {
  async index(ctx: RouterContext) {
    ctx.status = HttpStatus.OK;
    ctx.body = {
      message: 'ok',
    };
  }
}
