import { logger } from '../shared/infrastructure/dependencies';
import { UserManager } from '../users/application/UserManager';
import { InMemoryUserRepository } from '../users/infrastructure/repository/in-memory-user-repository';
import { UsersAdapter } from './application/UsersAdapter';

const userRepository = new InMemoryUserRepository();
const usersManager = new UserManager(userRepository, logger);

export const usersAdapter = new UsersAdapter(usersManager);
