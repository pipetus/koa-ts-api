import { koaJwtSecret } from 'jwks-rsa';
import jwt from 'koa-jwt';

export const authentication = jwt({
  issuer: `${process.env.AUTH0_ISSUER}/`, // Last slash is important
  algorithms: ['RS256'],
  audience: process.env.AUTH0_CLIENT_ID,
  secret: koaJwtSecret({
    jwksUri: `${process.env.AUTH0_ISSUER}/.well-known/jwks.json`,
    cache: true,
    cacheMaxEntries: 5,
  }),
});
