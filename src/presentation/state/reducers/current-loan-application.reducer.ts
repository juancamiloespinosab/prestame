import { createReducer, on } from '@ngrx/store';

import { LoanApplication, LOAN_STATUS } from '@core/models';
import * as actions from '@state/actions/current-loan-application.action';

export const currentLoanApplicationInitialState: LoanApplication = {
    id: 0,
    amount: 0,
    paymentDate: '',
    status: LOAN_STATUS.PENDING,
    payed: false,
};

export const currentLoanApplicationReducer = createReducer(
    currentLoanApplicationInitialState,
    on(
        actions.saveCurrentLoanApplicationAction,
        (state, { payload }) => payload
    ),
    on(
        actions.resetCurrentLoanApplicationAction,
        () => currentLoanApplicationInitialState
    )
);
