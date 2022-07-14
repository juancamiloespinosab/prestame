import { Injectable } from '@angular/core';
import { LoanApplication, LoanStatus } from '@core/models';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export abstract class LoanApplicationRepository {
    abstract createLoanApplication(
        loanApplication: LoanApplication
    ): Observable<LoanStatus>;
    abstract payLoanApplication(loanApplicationId: number): Observable<any>;
    abstract listAllLoanApplicationsByStatus(
        status: LoanStatus
    ): Observable<LoanApplication[]>;
}
