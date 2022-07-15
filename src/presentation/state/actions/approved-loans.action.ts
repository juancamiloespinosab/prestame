import { createAction, props } from '@ngrx/store';

import { LoanApplication, LOAN_STATUS } from '@core/models';

export enum ApprovedLoansActionTypes {
    listAllLoanApplicationsByStatus = '[Approved Loans] List All Loan Applications By Status',
    saveAllLoanApplicationsByStatus = '[Approved Loans] Save All Loan Applications By Status List',
}

export const listAllLoanApplicationsByStatusAction = createAction(
    ApprovedLoansActionTypes.listAllLoanApplicationsByStatus,
    props<{ payload: LOAN_STATUS }>()
);

export const saveAllLoanApplicationsByStatusAction = createAction(
    ApprovedLoansActionTypes.saveAllLoanApplicationsByStatus,
    props<{ payload: LoanApplication[] }>()
);
