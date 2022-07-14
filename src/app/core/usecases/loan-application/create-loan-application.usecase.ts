
import { Injectable } from '@angular/core';
import { LoanApplication, Status } from '@app/core/models';
import { LoanApplicationRepository, UserRepository } from '@app/core/repositories';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class createLoanApplicationUsecase {

  constructor(private loanApplicationRepository: LoanApplicationRepository) { }

  execute(loanApplication: LoanApplication): Observable<Status> {
    return this.loanApplicationRepository.createLoanApplication(loanApplication);
  }
}