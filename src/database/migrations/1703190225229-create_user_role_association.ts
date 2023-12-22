import { tr } from '@faker-js/faker'
import {
  MigrationInterface,
  QueryRunner,
  TableForeignKey,
  TableColumn
} from 'typeorm'


export class CreateUserRoleAssociation1703190225229 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'role_id',
        type: 'int',
        isNullable: true
      })
    )

    await queryRunner.createForeignKey(
      'users',
      new TableForeignKey({
        name: 'FK_USER_ROLE',
        columnNames: ['role_id'],
        referencedTableName: 'roles',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('users')
    const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('role_id') !== -1)
    await queryRunner.dropForeignKey('users', foreignKey)
    await queryRunner.dropColumn('users', 'role_id')
  }
}
