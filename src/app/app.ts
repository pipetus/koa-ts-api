import Koa from 'koa';
import bodyParser from 'koa-bodyparser';

import { errorHandler, authentication } from './middleware';
import router from './router';

const app: Koa = new Koa();

// Global middlewares
app.use(errorHandler).use(bodyParser()).use(authentication);

// Register routes
router(app);

app.on('error', console.error);

export default app;
