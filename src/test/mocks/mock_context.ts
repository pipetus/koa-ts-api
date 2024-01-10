import { createMockContext } from '@shopify/jest-koa-mocks';
import { RouterContext } from '../../app/router';

export const routerMockContext = (options?: {
  params?: Record<string, unknown>;
  body?: Record<string, unknown>;
}) =>
  ({
    ...createMockContext({ requestBody: options?.body || {} }),
    params: options?.params || {},
    router: {},
    _matchedRoute: '',
    _matchedRouteName: '',
  }) as RouterContext;
