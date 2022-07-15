import { createAction, props } from '@ngrx/store';

export enum BankActionTypes {
    depositAmount = '[Bank] Deposit Amount',
    withdrawAmount = '[Bank] Withdraw Amount',
}

export const depositAmountAction = createAction(
    BankActionTypes.depositAmount,
    props<{ payload: number }>()
);

export const withdrawAmountAction = createAction(
    BankActionTypes.withdrawAmount,
    props<{ payload: number }>()
);
