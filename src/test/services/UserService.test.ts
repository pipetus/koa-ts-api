import { mock } from 'jest-mock-extended';
import { Repository } from 'typeorm';
import { Role, User } from '../../app/models';
import { UserService } from '../../app/services';

describe('UserService', () => {
  let userRepository: Repository<User>;
  let roleRepository: Repository<Role>;
  let userService: UserService;

  beforeEach(() => {
    jest.clearAllMocks();

    userRepository = mock<Repository<User>>();
    roleRepository = mock<Repository<Role>>();
    userService = new UserService(userRepository, roleRepository);
  });

  describe('assignRole', () => {
    it('assigns a new role to the user', async () => {
      const findOneSpy = jest.spyOn(roleRepository, 'findOne');
      const saveSpy = jest.spyOn(userRepository, 'save');
      const user = new User();
      const role = new Role();
      user.id = 1;
      user.email = 'test';
      user.name = 'test';

      role.id = 1;
      role.name = 'admin';

      findOneSpy.mockResolvedValue(role);
      saveSpy.mockResolvedValue(user);

      await userService.assignRole(user, 'admin');

      expect(user.role).toMatchObject({
        name: 'admin',
      });
    });
  });
});
