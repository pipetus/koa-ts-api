import { createMockContext } from '@shopify/jest-koa-mocks';
import { RouterContext } from '../../app/router';

export const routerMockContext = (options?: {
  params?: {},
  body?: {},
}) => ({
  ...createMockContext({ requestBody: options?.body || {} }),
  params: options?.params || {},
  router: {},
  _matchedRoute: '',
  _matchedRouteName: '',
} as RouterContext);