import { Injectable } from '@angular/core';
import { Status } from '@app/core/models';
import { LoanApplicationRepository } from '@app/core/repositories';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class changeLoanApplicationStatusUsecase {
    constructor(private loanApplicationRepository: LoanApplicationRepository) {}

    execute(loanApplicationId: number, newStatus: Status): void {
        return this.loanApplicationRepository.changeLoanApplicationStatus(
            loanApplicationId,
            newStatus
        );
    }
}
