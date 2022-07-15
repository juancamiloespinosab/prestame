import { Injectable } from '@angular/core';
import { LoanApplication, LOAN_STATUS } from '@core/models';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export abstract class LoanApplicationRepository {
    abstract createLoanApplication(
        loanApplication: LoanApplication
    ): Observable<LOAN_STATUS>;
    abstract payLoanApplication(loanApplicationId: number): Observable<any>;
    abstract listAllLoanApplicationsByStatus(
        status: LOAN_STATUS
    ): Observable<LoanApplication[]>;
}
