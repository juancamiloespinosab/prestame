import { Injectable } from '@angular/core';
import { LoanApplication, LOAN_STATUS } from '@core/models';
import { LoanApplicationRepository } from '@core/repositories';
import { Observable } from 'rxjs';

Injectable({
    providedIn: 'root',
});
export class ListAllLoanApplicationsByStatusUsecase {
    constructor(private loanApplicationRepository: LoanApplicationRepository) {}

    execute(status: LOAN_STATUS): Observable<LoanApplication[]> {
        return this.loanApplicationRepository.listAllLoanApplicationsByStatus(
            status
        );
    }
}
