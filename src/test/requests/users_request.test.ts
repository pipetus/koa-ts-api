import HttpStatus from 'http-status-codes';
import request from 'supertest';
import app from '../../app/app';
import { userFactory } from '../factories/user';
import { DbHelper } from '../helpers/db_helper';

describe('UserController', () => {
  beforeAll(async () => {
    await DbHelper.getInstance().setup();
  });

  afterAll(async () => {
    await DbHelper.getInstance().teardown();
  });

  describe('index', () => {
    it('returns an array of users', async () => {
      // Arrange
      const users = await userFactory.createList(2);

      // Act
      const response = await request(app.callback()).get('/users');

      // Assert
      expect(response.status).toEqual(HttpStatus.OK);
      expect(response.body).toMatchObject({
        data: expect.arrayContaining([
          expect.objectContaining({
            id: users[0].id.toString(),
            type: 'users',
            attributes: expect.objectContaining({
              id: users[0].id,
              name: users[0].name,
              email: users[0].email,
            }),
          }),
          expect.objectContaining({
            id: users[1].id.toString(),
            type: 'users',
            attributes: expect.objectContaining({
              id: users[1].id,
              name: users[1].name,
              email: users[1].email,
            }),
          }),
        ]),
      });
    });
  });

  describe('show', () => {
    it('returns a user', async () => {
      // Arrange
      const user = await userFactory.create();

      // Act
      const response = await request(app.callback()).get(`/users/${user.id}`);

      // Assert
      expect(response.status).toEqual(HttpStatus.OK);
      expect(response.body).toMatchObject({
        data: expect.objectContaining({
          id: user.id.toString(),
          type: 'users',
          attributes: expect.objectContaining({
            id: user.id,
            name: user.name,
            email: user.email,
          }),
        }),
      });
    });
  });

  describe('create', () => {
    it('creates a user', async () => {
      // Arrange
      const body = {
        name: 'Test User',
        email: 'any@email.com',
        password: 'any-password',
      };

      // Act
      const response = await request(app.callback()).post('/users').send(body);

      // Assert
      expect(response.status).toEqual(HttpStatus.CREATED);
      expect(response.body).toMatchObject({
        data: expect.objectContaining({
          id: expect.any(String),
          type: 'users',
          attributes: expect.objectContaining({
            name: 'Test User',
            email: 'any@email.com',
            password: 'any-password',
          }),
        }),
      });
    });
  });

  describe('update', () => {
    it('updates a user', async () => {
      // Arrange
      const user = await userFactory.create();
      const body = {
        name: 'Updated User',
        email: 'updated@email.com',
      };

      // Act
      const response = await request(app.callback())
        .put(`/users/${user.id}`)
        .send(body);

      // Assert
      expect(response.status).toEqual(HttpStatus.OK);
      expect(response.body).toMatchObject({
        data: expect.objectContaining({
          id: user.id.toString(),
          type: 'users',
          attributes: expect.objectContaining({
            id: user.id,
            name: 'Updated User',
            email: 'updated@email.com',
            password: user.password,
          }),
        }),
      });
    });
  });

  describe('destroy', () => {
    it('destroys a user', async () => {
      // Arrange
      const user = await userFactory.create();

      // Act
      const response = await request(app.callback()).delete(
        `/users/${user.id}`,
      );

      // Assert
      expect(response.status).toEqual(HttpStatus.NO_CONTENT);
    });
  });
});
