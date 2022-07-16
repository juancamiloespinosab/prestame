import { createReducer, on } from '@ngrx/store';

import { LoanApplication, LOAN_STATUS } from '@core/models';
import * as actions from '@state/actions/current-loan-application.action';
import { environment } from '@environments/environment';

const bankAmounts = environment.bankAmounts;

export const currentLoanApplicationInitialState: LoanApplication = {
    id: 0,
    amount: bankAmounts.minLoanAmount,
    paymentDate: '',
    status: LOAN_STATUS.PENDING,
    payed: false,
};

export const currentLoanApplicationReducer = createReducer(
    currentLoanApplicationInitialState,
    on(actions.saveCurrentLoanApplicationAction, (state, { payload }) => {
        return {
            ...state,
            status: payload.status,
        };
    }),
    on(
        actions.updateurrentLoanApplicationAmountAction,
        (state, { payload }) => {
            return {
                ...state,
                amount: payload,
            };
        }
    ),
    on(
        actions.updateCurrentLoanApplicationPaymentDateAction,
        (state, { payload }) => {
            return {
                ...state,
                paymentDate: payload,
            };
        }
    ),
    on(
        actions.resetCurrentLoanApplicationAction,
        () => currentLoanApplicationInitialState
    ),
    on(
        actions.updateCurrentLoanApplicationStatusAction,
        (state, { payload }) => {
            return {
                ...state,
                status: payload,
            };
        }
    )
);
