import { IUserRepository } from '../../domain/interfaces/IUserRepository';
import { User } from '../../domain/models/user';
import { USERS } from './users';

export class InMemoryUserRepository implements IUserRepository {
  async getById(id: string): Promise<User | null> {
    const user = USERS.find((user) => user.id === id);

    if (!user) {
      return null;
    }

    return new User(user.id, user.email, user.slackUserId);
  }
}
