import { Injectable } from '@angular/core';
import { LoanApplication, Status } from '@core/models';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export abstract class LoanApplicationRepository {
    abstract createLoanApplication(
        loanApplication: LoanApplication
    ): Observable<Status>;
    abstract changeLoanApplicationStatus(
        loanApplicationId: number,
        newStatus: Status
    ): void;
    abstract payLoanApplication(loanApplicationId: number): void;
    abstract listAllLoanApplicationsByStatus(
        status: Status
    ): Observable<LoanApplication[]>;
}
