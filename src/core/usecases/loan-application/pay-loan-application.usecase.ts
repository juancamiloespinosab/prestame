import { Injectable } from '@angular/core';
import { LoanApplicationRepository } from '@app/core/repositories';

@Injectable({
    providedIn: 'root',
})
export class PayLoanApplicationUsecase {
    constructor(private LoanApplicationRepository: LoanApplicationRepository) {}

    execute(loanApplicationId: number): void {
        return this.LoanApplicationRepository.payLoanApplication(
            loanApplicationId
        );
    }
}
