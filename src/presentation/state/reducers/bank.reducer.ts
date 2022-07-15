import { Bank } from '@core/models';
import { environment } from '@environments/environment';
import { createReducer, on } from '@ngrx/store';

import * as actions from '@state/actions/bank.action';

const bankAmounts = environment.bankAmounts;

export const bankInitialState: Bank = {
    baseAmount: bankAmounts.baseAmount,
    minLoanAmount: bankAmounts.minLoanAmount,
    maxLoanAmount: bankAmounts.maxLoanAmount,
};

export const bankReducer = createReducer(
    bankInitialState,
    on(actions.depositAmountAction, (state, { payload }) => {
        return {
            ...state,
            baseAmount: state.baseAmount + payload,
        };
    }),
    on(actions.withdrawAmountAction, (state, { payload }) => {
        return {
            ...state,
            baseAmount: state.baseAmount - payload,
        };
    })
);
