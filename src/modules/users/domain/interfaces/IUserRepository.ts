import { User } from '../models/user';

export interface IUserRepository {
  getById(id: string): Promise<User | null>;
}
