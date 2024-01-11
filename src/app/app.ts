import Koa from 'koa';
import { koaSwagger } from 'koa2-swagger-ui';
import yamljs from 'yamljs';
import { errorHandler } from './middlewares';
import router from './router';

const app = new Koa();
const spec = yamljs.load(`${__dirname}/../openapi.yml`);

// Global middlewares
app.use(errorHandler);

app.use(
  koaSwagger({
    title: 'Test',
    routePrefix: '/docs', // host at /swagger instead of default /docs
    swaggerOptions: {
      spec,
    },
  }),
);

// Register routes
router(app);

// Log all errors handled by the global errorHandler
app.on('error', console.error);

export default app;
