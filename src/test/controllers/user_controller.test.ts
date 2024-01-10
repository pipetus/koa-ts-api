import { mock } from 'jest-mock-extended';
import { UserController } from '../../app/controllers';
import { UserService } from '../../app/services';
import { routerMockContext } from '../mocks/mock_context';

describe('UserController', () => {
  let userService: UserService;
  let controller: UserController;

  beforeEach(async () => {
    jest.clearAllMocks();
    userService = mock<UserService>();
    controller = new UserController(userService);
  });

  describe('index', () => {
    it('returns an array of users', async () => {
      const getAllSpy = jest.spyOn(userService, 'findAll');
      const ctx = routerMockContext();

      getAllSpy.mockResolvedValue([]);

      await controller.index(ctx);

      expect(getAllSpy).toHaveBeenCalledTimes(1);
      expect(ctx.body).toStrictEqual({
        data: [],
      });
    });
  });
});
