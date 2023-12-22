import 'reflect-metadata'
import { Factory } from 'fishery';
import User from '../../app/models/user';
import UserRepository from '../../app/repositories/user_repository';
import { faker } from '@faker-js/faker';

export const userBuilder = Factory.define<User>(({ sequence }) => ({
  id: sequence,
  name: faker.person.fullName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  role: null
}));

export const userFactory = Factory.define<User>(({ onCreate }) => {
  onCreate(user => new UserRepository().create(user as User))

  return userBuilder.build()
})
