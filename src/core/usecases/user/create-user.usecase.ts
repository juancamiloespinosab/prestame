import { Injectable } from '@angular/core';
import { User } from '@core/models';
import { UserRepository } from '@core/repositories';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CreateUserUsecase {
    constructor(private userRepository: UserRepository) {}

    execute(user: User): Observable<any> {
        return this.userRepository.createUser(user);
    }
}
