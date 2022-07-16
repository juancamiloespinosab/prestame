import { Injectable } from '@angular/core';
import { LoanApplication } from '@core/models';
import { ApprovedLoan } from '@presentation/interfaces';

@Injectable({
    providedIn: 'root',
})
export class ApprovedLoansAdapter {
    mapFrom(approvedLoans: LoanApplication[]): ApprovedLoan[] {
        return approvedLoans.map((loan: LoanApplication) => {
            return {
                number: loan.id,
                amount: loan.amount,
                userName: loan.users ? loan.users[0].name : '',
                allData: loan,
            };
        });
    }
}
