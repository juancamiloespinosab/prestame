import { Injectable } from '@angular/core';
import { LoanApplication, LOAN_STATUS } from '@core/models';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export abstract class LoanApplicationRepository {
    abstract createLoanApplication(
        loanApplication: LoanApplication
    ): Observable<LoanApplication>;

    abstract payLoanApplication(loanApplicationId: number): Observable<any>;

    abstract listAllLoanApplicationsByFilters(
        status: LOAN_STATUS, payed: boolean
    ): Observable<LoanApplication[]>;
}
