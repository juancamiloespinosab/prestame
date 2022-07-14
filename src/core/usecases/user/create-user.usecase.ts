
import { Injectable } from '@angular/core';
import { User } from '@app/core/models';
import { UserRepository } from '@app/core/repositories';

@Injectable({
  providedIn: 'root'
})
export class CreateUserUsecase {

  constructor(private userRepository: UserRepository) { }

  execute(user: User): void {
    return this.userRepository.createUser(user);
  }
}