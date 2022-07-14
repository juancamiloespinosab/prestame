import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@core/models';
import { UserRepository } from '@core/repositories';
import { environment } from '@environments/environment';
import { map } from 'rxjs';
import { UserWebRepositoryAdapter } from '@data/repository';
import { UserWeb } from '@data/repository';

@Injectable({
    providedIn: 'root',
})
export class UserWebRepository extends UserRepository {
    mockLocalApi = environment.mockLocalApi;
    userWebRepositoryAdapter = new UserWebRepositoryAdapter();

    constructor(private httpClient: HttpClient) {
        super();
    }

    createUser(user: User) {
        const url = `${this.mockLocalApi.baseUrl}/${this.mockLocalApi.paths.users}`;

        return this.httpClient
            .post<User>(url, user)
            .pipe(map(this.userWebRepositoryAdapter.mapTo));
    }
}
