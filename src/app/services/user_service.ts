import { Service } from 'typedi';
import { Repository } from 'typeorm';
import DataSource from '../../database/datasource';
import { User, Role } from '../models';

@Service()
export class UserService {
  private userRepository: Repository<User> = DataSource.getTreeRepository(User);
  private roleRepository: Repository<Role> = DataSource.getTreeRepository(Role);

  constructor() {}

  public async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  public async create(_entity: User): Promise<User> {
    return null;
  }

  public async findById(_id: number): Promise<User | undefined> {
    return null;
  }

  public async update(_entity: User): Promise<User> {
    return null;
  }

  public async delete(_id: number): Promise<void> {
    return null;
  }

  public async assignRole(user: User, roleName: string): Promise<void> {
    const role = await this.roleRepository.findOne({
      where: { name: roleName },
    });
    user.role = role;
    await this.userRepository.save(user);
  }
}
