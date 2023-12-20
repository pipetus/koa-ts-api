import { createMockContext } from '@shopify/jest-koa-mocks';
import { RouterContext } from '../../app/router';

export const routerMockContext = (params?: {}) => ({
  ...createMockContext(),
  params,
  router: {},
  _matchedRoute: '',
  _matchedRouteName: '',
} as RouterContext);