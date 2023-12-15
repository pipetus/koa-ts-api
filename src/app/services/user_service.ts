import User from '../models/user';

class UserService {
  private users: User[] = [];

  public doSomething(): void {
    console.log('Doing something...', this.users);
  }
}

export default UserService;
