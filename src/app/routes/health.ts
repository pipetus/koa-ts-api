import { Spec } from 'koa-joi-router';
import { Container } from 'typedi';
import { HealthController } from '../controllers';
import { RouterContext } from '../router';

const controller = Container.get<HealthController>(HealthController);

export const healthRoutes: Spec[] = [
  {
    method: 'get',
    path: '/health',
    handler: (ctx: RouterContext) => controller.index(ctx),
  },
];
