import User from '../models/user';
import dataSource from '../../database/datasource';
import { Repository } from 'typeorm';

export default class UserRepository {
  private connection = dataSource;
  private repository: Repository<User>;

  public async create(user: User): Promise<User> {
    const newUser = (await this.getRepository()).create(user);
    return (await this.getRepository()).save(newUser);
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    return (await this.getRepository()).findOne({ where: { email } });
  }

  public async findAll(): Promise<User[]> {
    return (await this.getRepository()).find();
  }

  public async findById(id: number): Promise<User | undefined> {
    return (await this.getRepository()).findOne({ where: { id } });
  }

  public async update(user: User): Promise<User> {
    return (await this.getRepository()).save(user);
  }

  public async delete(id: number): Promise<void> {
    await (await this.getRepository()).delete({ id });
  }

  private async getRepository(): Promise<Repository<User>> {
    if (!this.repository) {
      this.repository = await this.connection.getRepository(User);
    }
    return this.repository;
  }
}
