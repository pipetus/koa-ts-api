import app from './app/app';
import databaseConnection from './database/connection';

const PORT: number = Number(process.env.PORT) || 3000;

databaseConnection.then(() => {
  console.log('Connected to database');
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}).catch(console.error);
