import { createAction, props } from '@ngrx/store';

import { LoanApplication } from '@core/models';

export enum CurrentLoanApplicationActionTypes {
    saveCurrentLoanApplication = '[Current Loan Application] Save Current Loan Application',
    createCurrentLoanApplication = '[Current Loan Application] Create Current Loan Application',
    resetCurrentLoanApplication = '[Current Loan Application] Reset Current Loan Application',
}

export const saveCurrentLoanApplicationAction = createAction(
    CurrentLoanApplicationActionTypes.saveCurrentLoanApplication,
    props<{ payload: LoanApplication }>()
);

export const createCurrentLoanApplicationAction = createAction(
    CurrentLoanApplicationActionTypes.createCurrentLoanApplication,
    props<{ payload: LoanApplication }>()
);

export const resetCurrentLoanApplicationAction = createAction(
    CurrentLoanApplicationActionTypes.resetCurrentLoanApplication
);
