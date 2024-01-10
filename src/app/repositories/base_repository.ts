import { EntityTarget, FindOneOptions, Repository } from 'typeorm';
import dataSource from '../../database/datasource';

export interface IEntity {
  id: number;
}

export class BaseRepository<T extends IEntity> {
  private connection = dataSource;
  protected repository: Repository<T>;
  relations: Record<string, boolean>;

  constructor(
    modelClass: EntityTarget<T> | undefined,
    relations: Record<string, boolean> = {},
  ) {
    this.repository = this.connection.getRepository(modelClass);
    this.relations = relations;
  }

  public async create(entity: T): Promise<T> {
    return this.repository.save(entity);
  }

  public async findAll(): Promise<T[]> {
    return this.repository.find();
  }

  public async findById(id: number): Promise<T | undefined> {
    const options: FindOneOptions<T> = {
      where: { id },
      relations: this.relations,
    } as FindOneOptions<T>;
    return this.repository.findOne(options);
  }

  public async update(entity: T): Promise<T> {
    return this.repository.save(entity);
  }

  public async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
