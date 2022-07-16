import { Injectable } from '@angular/core';
import { LoanApplication, LOAN_STATUS, User } from '@core/models';
import { Observable } from 'rxjs';

import { LoanApplicationRepository } from '@core/repositories'

@Injectable({
    providedIn: 'root',
})
export class ListAllLoanApplicationsByFiltersUsecase {
    constructor(private loanApplicationRepository: LoanApplicationRepository) {}

    execute(status: LOAN_STATUS, payed: boolean): Observable<LoanApplication[]> {
        return this.loanApplicationRepository.listAllLoanApplicationsByFilters(
            status,
            payed
        );
    }
}
