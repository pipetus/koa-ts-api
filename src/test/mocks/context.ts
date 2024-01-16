import { createMockContext } from '@shopify/jest-koa-mocks';
import { RouterContext } from '../../app/router';

interface Options {
  params?: Record<string, unknown>;
  body?: Record<string, unknown>;
}

export const routerMockContext = (options?: Options) =>
  ({
    ...createMockContext({ requestBody: options?.body || {} }),
    params: options?.params || {},
    router: {},
    _matchedRoute: '',
    _matchedRouteName: '',
  }) as RouterContext;
