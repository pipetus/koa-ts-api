import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableIndex
} from 'typeorm'

// https://typeorm.io/migrations

export class CreateRole1703189932945 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'roles',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment',
            isGenerated: true
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false
          },
        ]
      })
    )

    await queryRunner.createIndex(
      'roles',
      new TableIndex({
        name: 'IDX_ROLE',
        columnNames: ['name'],
        isUnique: true
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex('roles', 'IDX_ROLE')
    await queryRunner.dropTable('roles',  true, true, true)
  }

}
