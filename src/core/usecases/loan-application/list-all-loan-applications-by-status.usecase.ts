import { Injectable } from '@angular/core';
import { LoanApplication, LOAN_STATUS, User } from '@core/models';
import { Observable } from 'rxjs';

import { LoanApplicationRepository } from '@core/repositories'

@Injectable({
    providedIn: 'root',
})
export class ListAllLoanApplicationsByStatusUsecase {
    constructor(private loanApplicationRepository: LoanApplicationRepository) {}

    execute(status: LOAN_STATUS): Observable<LoanApplication[]> {
        return this.loanApplicationRepository.listAllLoanApplicationsByStatus(
            status
        );
    }
}
