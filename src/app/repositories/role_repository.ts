import Role from '../models/role';
import BaseRepository from './base_repository';

export default class RoleRepository extends BaseRepository<Role> {
  constructor() {
    super(Role);
  }

  public async findByName(name: string): Promise<Role | undefined> {
    return this.repository.findOne({ where: { name } });
  }
}