import { Injectable } from '@angular/core';
import { LoanApplication, User } from '@core/models';
import { LoanApplicationWeb, UserWeb } from '@data/repository';

@Injectable({
    providedIn: 'root',
})
export class LoanApplicationWebRepositoryAdapter {
    mapFrom(loanApplicationWeb: LoanApplicationWeb): LoanApplication {
        return {
            id: loanApplicationWeb.id,
            amount: loanApplicationWeb.amount,
            paymentDate: loanApplicationWeb.paymentDate,
            status: loanApplicationWeb.status,
            payed: loanApplicationWeb.payed,
        };
    }

    mapTo(loanApplication: LoanApplication): LoanApplicationWeb {
        return {
            id: loanApplication.id,
            amount: loanApplication.amount,
            paymentDate: loanApplication.paymentDate,
            status: loanApplication.status,
            payed: loanApplication.payed,
        };
    }
}
