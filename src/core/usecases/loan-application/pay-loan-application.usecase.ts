import { Injectable } from '@angular/core';
import { LoanApplicationRepository } from '@core/repositories';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PayLoanApplicationUsecase {
    constructor(private LoanApplicationRepository: LoanApplicationRepository) {}

    execute(loanApplicationId: number): Observable<any> {
        return this.LoanApplicationRepository.payLoanApplication(
            loanApplicationId
        );
    }
}
