import * as Koa from 'koa';
import errorHandler from './middleware/error_handling';
import initial from './middleware/initial';

const app: Koa = new Koa();

app.use(errorHandler)

// Initial route
app.use(initial);

app.on('error', console.error);

export default app;