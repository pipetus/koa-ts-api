import { UserController } from '../../app/controllers/user_controller';
import { routerMockContext } from '../helpers/mock_context';
import { DbHelper } from '../helpers/setup';
import * as HttpStatus from 'http-status-codes';

describe('UserController', () => {
  beforeAll(async () => {
    await DbHelper.getInstance().setup();
  })

  afterAll(async () => {
    await DbHelper.getInstance().teardown();
  })

  describe('index', () => {
    it('returns an array of users', async () => {
      const userController = new UserController();
      const ctx = routerMockContext();

      await userController.index(ctx);

      expect(ctx.body).toMatchObject({
        data: expect.any(Array)
      })
      expect(ctx.status).toEqual(HttpStatus.StatusCodes.OK)
    });
  });

  describe.only('show', () => {
    it('returns a user', async () => {
      // Arrange
      const userController = new UserController();
      const ctx = routerMockContext({ id: 1 });

      // Act
      await userController.show(ctx);

      console.log('ctx.body', ctx.body)

      // Assert
      expect(ctx.body).toMatchObject({
        data: expect.any({
          id: expect.any(Number),
          type: expect.any(String),
          attributes: expect.any(Object)
        })
      })
      expect(ctx.status).toEqual(HttpStatus.StatusCodes.OK)
    });
  });

  describe('create', () => {
    it('creates a user', async () => {
      const userController = new UserController();
      const ctx = routerMockContext();

      await userController.create(ctx);

      expect(ctx.status).toEqual(HttpStatus.StatusCodes.CREATED)
      expect(ctx.body).not.toBeNull();
      expect(ctx.body).toMatchObject({
        data: expect.any({
          id: expect.any(Number),
          type: expect.any(String),
          attributes: expect.any(Object)
        })
      })
    });
  });

  describe('update', () => {
    it('updates a user', async () => {
      const userController = new UserController();
      const ctx = routerMockContext({ id: 1 });

      await userController.update(ctx);

      expect(ctx.body).toMatchObject({
        data: expect.any({
          id: expect.any(Number),
          type: expect.any(String),
          attributes: expect.any(Object)
        })
      })
      expect(ctx.status).toEqual(HttpStatus.StatusCodes.OK)
    });
  });

  describe('destroy', () => {
    it('destroys a user', async () => {
      const userController = new UserController();
      const ctx = routerMockContext({ id: 1 });

      await userController.destroy(ctx);

      expect(ctx.status).toEqual(HttpStatus.StatusCodes.NO_CONTENT);
    });
  });
});