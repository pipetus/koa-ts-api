import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as session from 'koa-session';
import errorHandler from './middleware/error_handling';
// import initial from './middleware/initial';
import router from './router';
import 'dotenv/config';
import { Loader as ConfigLoader } from '../config/loader';
import * as Csrf from 'koa-csrf';

const app: Koa = new Koa();

// Load config
ConfigLoader.getInstance().configure(config => {
  app.keys = [
    ...config.get<string>('app.keys.session'),
    ...config.get<string>('app.keys.csrf')
  ];
});

app.use(errorHandler)
   .use(bodyParser())
   .use(session(app));

if (ConfigLoader.getInstance().get('security.csrf.enabled')) {
  app.use(new Csrf());
}

// Initial route
// app.use(initial);

// Register routes
router(app);

app.on('error', console.error);

export default app;
