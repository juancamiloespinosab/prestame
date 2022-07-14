import { User } from '@app/core/models';

export abstract class UserRepository {
    abstract createUser(user: User): void;
}
