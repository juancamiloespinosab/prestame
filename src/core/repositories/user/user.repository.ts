import { User } from '@core/models';

export abstract class UserRepository {
    abstract createUser(user: User): void;
}
