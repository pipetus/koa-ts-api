import 'reflect-metadata';
import { faker } from '@faker-js/faker';
import { Factory } from 'fishery';
import { User } from '../../app/models';
import { UserRepository } from '../../app/repositories';

export const userBuilder = Factory.define<User>(({ sequence }) => ({
  id: sequence,
  name: faker.person.fullName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  role: null,
}));

export const userFactory = Factory.define<User>(({ onCreate }) => {
  onCreate((user) => new UserRepository().create(user as User));

  return userBuilder.build();
});
