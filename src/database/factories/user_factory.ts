import { Factory, FactorizedAttrs } from '@jorgebodega/typeorm-factory';
import { faker } from '@faker-js/faker'
import User from '../../app/models/user'
import dataSource from '../datasource';

export class UserFactory extends Factory<User> {
  protected entity = User;
  protected dataSource = dataSource;

  protected attrs(): FactorizedAttrs<User> {
    return {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    }
  }
}