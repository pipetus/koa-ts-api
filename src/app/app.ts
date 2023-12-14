import * as Koa from 'koa';
import errorHandler from './middleware/error_handling';
import initial from './middleware/initial';
import router from './router';

const app: Koa = new Koa();

app.use(errorHandler)

// Initial route
app.use(initial);

// Register routes
router(app);

app.on('error', console.error);

export default app;