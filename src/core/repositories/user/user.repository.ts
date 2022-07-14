import { Injectable } from '@angular/core';
import { User } from '@core/models';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export abstract class UserRepository {
    abstract createUser(user: User): Observable<any>;
}
