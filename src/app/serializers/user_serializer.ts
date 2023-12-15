import { Serializer } from 'jsonapi-serializer';
import User from '../models/user';

export default class UserSerializer {
  users: User | User[];
  private serializer: Serializer;

  constructor(users: User[] | User) {
    this.serializer = new Serializer('users', {
      attributes: ['id', 'name', 'email', 'password'],
    });

    this.users = users;
  }

  public data() {
    return this.serializer.serialize(this.users);
  }
}