import User from '../models/user';
import dataSource from '../../database/datasource';

export default class UserRepository {
  private connection = dataSource;

  public async create(user: User): Promise<User> {
    const repository = await this.connection.getRepository(User);
    const newUser = repository.create(user);
    console.log(newUser);
    console.log('---------')
    return repository.save(newUser);
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const repository = await this.connection.getRepository(User);
    return repository.findOne({ where: { email } });
  }

  public async findAll(): Promise<User[]> {
    const repository = await this.connection.getRepository(User);
    return await repository.find();
  }
}