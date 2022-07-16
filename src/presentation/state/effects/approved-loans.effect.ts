import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';

import {
    ApprovedLoansActionTypes,
    BankActionTypes,
    depositAmountAction,
    listAllLoanApplicationsByFiltersAction,
    saveAllLoanApplicationsByFiltersAction,
    withdrawAmountAction,
} from '@state/actions';
import { LoanApplication, LOAN_STATUS } from '@core/models';
import { ListAllLoanApplicationsByFiltersUsecase } from '@core/usecases/loan-application/list-all-loan-applications-by-status.usecase';
import { PayLoanApplicationUsecase } from '@core/usecases';

@Injectable()
export class ApprovedLoansEffects {

    approvedLoan: LoanApplication

    listAllLoanApplicationsByFilters$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ApprovedLoansActionTypes.listAllLoanApplicationsByFilters),
            mergeMap((payload: { status: LOAN_STATUS; payed: boolean }) => {
                return this.listAllLoanApplicationsByFiltersUsecase
                    .execute(payload.status, payload.payed)
                    .pipe(
                        map((payload: LoanApplication[]) =>
                            saveAllLoanApplicationsByFiltersAction({
                                payload,
                            })
                        )
                    );
            })
        )
    );

    payOneLoanApplicationById$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ApprovedLoansActionTypes.payOneLoanApplicationById),
            mergeMap((payload: any) => {

                this.approvedLoan = payload.payload;

                return this.payLoanApplicationUsecase
                    .execute(payload.payload.number)
                    .pipe(
                        map((payload: any) => {
                            
                            return depositAmountAction({
                                payload: this.approvedLoan.amount,
                            });
                        })
                    );
            }),
        )
    );

    depositAmount$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(BankActionTypes.depositAmount),
            map((payload: number) => {
                return listAllLoanApplicationsByFiltersAction({
                    status: LOAN_STATUS.APPROVED,
                    payed: false,
                });
            })
        );
    });

    constructor(
        private actions$: Actions,
        private listAllLoanApplicationsByFiltersUsecase: ListAllLoanApplicationsByFiltersUsecase,
        private payLoanApplicationUsecase: PayLoanApplicationUsecase
    ) {}
}
