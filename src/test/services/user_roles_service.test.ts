import UserService from '../../app/services/user_service';
import { userFactory } from '../factories/user';
import { DbHelper } from '../helpers/db_helper';

describe('Role assignment', () => {
  let userService: UserService;

  beforeAll(async () => {
    await DbHelper.getInstance().setup();
  })

  afterAll(async () => {
    await DbHelper.getInstance().teardown();
  })

  beforeEach(() => {
    userService = new UserService();
  });

  it('assigns a new role to the user', async () => {
    // Arrange
    const user = await userFactory.create();

    // Act
    await userService.assignRole(user, 'admin');

    // Assert
    expect(user.role).toMatchObject({
      name: 'admin'
    });
  });
});