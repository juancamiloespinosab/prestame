
import { Injectable } from '@angular/core';
import { LoanApplication, LOAN_STATUS } from '@core/models';
import { LoanApplicationRepository, UserRepository } from '@core/repositories';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateLoanApplicationUsecase {

  constructor(private loanApplicationRepository: LoanApplicationRepository) { }

  execute(loanApplication: LoanApplication): Observable<LoanApplication> {    
    return this.loanApplicationRepository.createLoanApplication(loanApplication);
  }
}