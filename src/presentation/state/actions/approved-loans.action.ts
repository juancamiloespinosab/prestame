import { createAction, props } from '@ngrx/store';

import { LoanApplication, LOAN_STATUS } from '@core/models';

export enum ApprovedLoansActionTypes {
    listAllLoanApplicationsByFilters = '[Approved Loans] List All Loan Applications By Status',
    saveAllLoanApplicationsByFilters = '[Approved Loans] Save All Loan Applications By Status List',

    payOneLoanApplicationById = '[Approved Loans] Pay One Loan Application By Id',
}

export const listAllLoanApplicationsByFiltersAction = createAction(
    ApprovedLoansActionTypes.listAllLoanApplicationsByFilters,
    props<{ status: LOAN_STATUS; payed: boolean }>()
);

export const saveAllLoanApplicationsByFiltersAction = createAction(
    ApprovedLoansActionTypes.saveAllLoanApplicationsByFilters,
    props<{ payload: LoanApplication[] }>()
);

export const payOneLoanApplicationByIdAction = createAction(
    ApprovedLoansActionTypes.payOneLoanApplicationById,
    props<{ payload: LoanApplication }>()
);
