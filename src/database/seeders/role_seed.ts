import { Seeder } from '@jorgebodega/typeorm-seeding';
import { DataSource } from 'typeorm';
import Role from '../../app/models/role';

export default class RoleSeeder extends Seeder {
  async run(dataSource: DataSource): Promise<void> {
    const roles: Role[] = [
      { name: 'admin' } as Role,
      { name: 'user' } as Role
    ];

    await dataSource.createEntityManager().getRepository(Role).upsert(
      roles,
      {
        conflictPaths: ['name'],
        skipUpdateIfNoValuesChanged: true,
        upsertType: 'on-conflict-do-update'
      });
  }
}