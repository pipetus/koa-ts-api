/* eslint-disable no-console */

import connection from '../connection';

const run = async () => {
  const conn = await connection;
  await conn.dropDatabase();
};

run().then(() => {
  console.log('DB reset!');
  process.exit();
});
