import User from '../models/user';
import UserRepository from '../repositories/user_repository';
import RoleRepository from '../repositories/role_repository';

class UserService {
  private userRepository: UserRepository = new UserRepository();
  private roleRepository: RoleRepository = new RoleRepository();

  public async assignRole(user: User, roleName: string): Promise<void> {
    const role = await this.roleRepository.findByName(roleName);
    user.role = role;
    await this.userRepository.update(user);
  }
}

export default UserService;
