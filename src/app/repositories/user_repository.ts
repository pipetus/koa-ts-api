import { User } from '../models/user';
import { BaseRepository } from './base_repository';

export class UserRepository extends BaseRepository<User> {
  constructor() {
    super(User, { role: true });
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    return this.repository.findOne({ where: { email } });
  }
}
