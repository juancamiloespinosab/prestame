import { Injectable } from '@angular/core';
import { LoanApplication, Status } from '@core/models';
import { LoanApplicationRepository } from '@core/repositories';
import { Observable } from 'rxjs';

Injectable({
    providedIn: 'root',
});
export class ListAllLoanApplicationsByStatusUsecase {
    constructor(private loanApplicationRepository: LoanApplicationRepository) {}

    execute(status: Status): Observable<LoanApplication[]> {
        return this.loanApplicationRepository.listAllLoanApplicationsByStatus(
            status
        );
    }
}
