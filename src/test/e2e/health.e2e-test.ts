import HttpStatus from 'http-status-codes';
import request from 'supertest';
import app from '../../app/app';

describe('HealthController (e2e)', () => {
  describe('index', () => {
    it('returns an array of users', async () => {
      // Act
      await request(app.callback())
        .get('/health')
        .expect(HttpStatus.OK)
        .expect({ message: 'ok' });
    });
  });
});
