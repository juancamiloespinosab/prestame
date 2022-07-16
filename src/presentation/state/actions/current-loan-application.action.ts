import { createAction, props } from '@ngrx/store';

import { LoanApplication, LOAN_STATUS, User } from '@core/models';

export enum CurrentLoanApplicationActionTypes {
    saveCurrentLoanApplication = '[Current Loan Application] Save Current Loan Application',
    createCurrentLoanApplication = '[Current Loan Application] Create Current Loan Application',
    resetCurrentLoanApplication = '[Current Loan Application] Reset Current Loan Application',

    updateCurrentLoanApplicationAmount = '[Current Loan Application] Update Current Loan Application Amount',
    updateCurrentLoanApplicationPaymentDate = '[Current Loan Application] Update Current Loan Application Payment Date',
    updateCurrentLoanApplicationStatus = '[Current Loan Application] Update Current Loan Application Status',
}

export const saveCurrentLoanApplicationAction = createAction(
    CurrentLoanApplicationActionTypes.saveCurrentLoanApplication,
    props<{ payload: LoanApplication }>()
);

export const createCurrentLoanApplicationAction = createAction(
    CurrentLoanApplicationActionTypes.createCurrentLoanApplication,
    props<{
        payload: {
            loanApplication: LoanApplication;
            user: User;
        };
    }>()
);

export const resetCurrentLoanApplicationAction = createAction(
    CurrentLoanApplicationActionTypes.resetCurrentLoanApplication
);

export const updateurrentLoanApplicationAmountAction = createAction(
    CurrentLoanApplicationActionTypes.updateCurrentLoanApplicationAmount,
    props<{ payload: number }>()
);

export const updateCurrentLoanApplicationPaymentDateAction = createAction(
    CurrentLoanApplicationActionTypes.updateCurrentLoanApplicationPaymentDate,
    props<{ payload: Date | string }>()
);

export const updateCurrentLoanApplicationStatusAction = createAction(
    CurrentLoanApplicationActionTypes.updateCurrentLoanApplicationStatus,
    props<{ payload: LOAN_STATUS }>()
);
