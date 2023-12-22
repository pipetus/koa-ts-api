import { UserController } from '../../app/controllers/user_controller';
import { routerMockContext } from '../mocks/mock_context';
import { DbHelper } from '../helpers/db_helper';
import * as HttpStatus from 'http-status-codes';
import { userFactory } from '../factories/user';

describe('UserController', () => {
  beforeAll(async () => {
    await DbHelper.getInstance().setup();
  })

  afterAll(async () => {
    await DbHelper.getInstance().teardown();
  })

  describe('index', () => {
    it('returns an array of users', async () => {
      // Arrange
      const userController = new UserController();
      const users = await userFactory.createList(2);
      const ctx = routerMockContext();

      // Act
      await userController.index(ctx);

      // Assert
      expect(ctx.status).toEqual(HttpStatus.StatusCodes.OK)
      expect(ctx.body).toMatchObject({
        data: expect.arrayContaining([
          expect.objectContaining({
            id: users[0].id.toString(),
            type: 'users',
            attributes: expect.objectContaining({
              id: users[0].id,
              name: users[0].name,
              email: users[0].email
            })
          }),
          expect.objectContaining({
            id: users[1].id.toString(),
            type: 'users',
            attributes: expect.objectContaining({
              id: users[1].id,
              name: users[1].name,
              email: users[1].email
            })
          })
        ])
      })
    });
  });

  describe('show', () => {
    it('returns a user', async () => {
      // Arrange
      const userController = new UserController();
      const user = await userFactory.create()
      const ctx = routerMockContext({ params: { id: user.id } });

      // Act
      await userController.show(ctx);

      // Assert
      expect(ctx.status).toEqual(HttpStatus.StatusCodes.OK)
      expect(ctx.body).toMatchObject({
        data: expect.objectContaining({
          id: user.id.toString(),
          type: 'users',
          attributes: expect.objectContaining({
            id: user.id,
            name: user.name,
            email: user.email
          })
        })
      })
    });
  });

  describe('create', () => {
    it('creates a user', async () => {
      // Arrange
      const userController = new UserController();
      const ctx = routerMockContext({ body: {
        name: 'Test User',
        email: 'any@email.com',
        password: 'any-password'
      }});

      // Act
      await userController.create(ctx);

      // Assert
      expect(ctx.status).toEqual(HttpStatus.StatusCodes.CREATED)
      expect(ctx.body).toMatchObject({
        data: expect.objectContaining({
          id: expect.any(String),
          type: 'users',
          attributes: expect.objectContaining({
            name: 'Test User',
            email: 'any@email.com',
            password: 'any-password'
          })
        })
      });
    });
  });

  describe('update', () => {
    it('updates a user', async () => {
      // Arrange
      const userController = new UserController();
      const user = await userFactory.create();
      const ctx = routerMockContext({
        params: { id: user.id },
        body: {
          name: 'Updated User',
          email: 'updated@email.com'
        }
      });

      // Act
      await userController.update(ctx);

      // Assert
      expect(ctx.status).toEqual(HttpStatus.StatusCodes.OK)
      expect(ctx.body).toMatchObject({
        data: expect.objectContaining({
          id: user.id.toString(),
          type: 'users',
          attributes: expect.objectContaining({
            id: user.id,
            name: 'Updated User',
            email: 'updated@email.com',
            password: user.password
          })
        })
      })
    });
  });

  describe('destroy', () => {
    it('destroys a user', async () => {
      const userController = new UserController();
      const ctx = routerMockContext({ params: { id: 1 } });

      await userController.destroy(ctx);

      expect(ctx.status).toEqual(HttpStatus.StatusCodes.NO_CONTENT);
    });
  });
});
