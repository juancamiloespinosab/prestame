import { createReducer, on } from '@ngrx/store';

import { LoanApplication } from '@core/models';
import * as actions from '@state/actions/approved-loans.action';

export const approvedLoansInitialState: LoanApplication[] = [];

export const approvedLoansReducer = createReducer(
    approvedLoansInitialState,
    on(
        actions.saveAllLoanApplicationsByStatusAction,
        (state, { payload }) => payload
    )
);
