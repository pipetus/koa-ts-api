import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import errorHandler from './middleware/error_handling';
// import initial from './middleware/initial';
import router from './router';

const app: Koa = new Koa();

app.use(errorHandler)
   .use(bodyParser());

// Initial route
// app.use(initial);

// Register routes
router(app);

app.on('error', console.error);

export default app;