import { Injectable } from '@angular/core';
import { User } from '@core/models';
import { UserWeb } from '@data/repository';

@Injectable({
    providedIn: 'root'
  })

export class UserWebRepositoryAdapter {
    mapFrom(userWeb: UserWeb): User {
        return {
            id: userWeb.id,
            name: userWeb.name,
            email: userWeb.email,
            document: userWeb.document,
            loanApplicationId: userWeb.loanId,
        };
    }

    mapTo(user: User): UserWeb {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            document: user.document,
            loanId: user.loanApplicationId,
        };
    }
}
