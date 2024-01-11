import Koa from 'koa';
import { errorHandler } from './middlewares';
import router from './router';

const app = new Koa();

// Global middlewares
app.use(errorHandler);

// Register routes
router(app);

// Log all errors handled by the global errorHandler
app.on('error', console.error);

export default app;
