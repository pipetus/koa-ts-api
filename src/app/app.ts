import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as session from 'koa-session';
import errorHandler from './middleware/error_handling';
// import initial from './middleware/initial';
import router from './router';
import 'dotenv/config';
import { Loader as ConfigLoader } from '../config/loader';

const app: Koa = new Koa();

// Load config
ConfigLoader.getInstance().configure(config => {
  app.keys = config.get('app.keys.session');
});

app.use(errorHandler)
   .use(bodyParser())
   .use(session(app));

// Initial route
// app.use(initial);

// Register routes
router(app);

app.on('error', console.error);

export default app;
