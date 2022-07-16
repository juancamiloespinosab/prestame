import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
    debounceTime,
    map,
    mergeMap,
    Observable,
    Subscription,
    tap,
} from 'rxjs';

import {
    ApprovedLoansActionTypes,
    CurrentLoanApplicationActionTypes,
    resetCurrentLoanApplicationAction,
    saveCurrentLoanApplicationAction,
    withdrawAmountAction,
} from '@state/actions';
import { LoanApplication, LOAN_STATUS } from '@core/models';
import { CreateLoanApplicationUsecase } from '@core/usecases';
import { AppState } from '@presentation/interfaces';
import { Store } from '@ngrx/store';
import { UtilService } from '@presentation/services/util.service';

@Injectable()
export class CurrentLoanApplicationEffects {
    currentLoanApplication$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(
                CurrentLoanApplicationActionTypes.createCurrentLoanApplication
            ),
            debounceTime(2000),
            mergeMap((payload: { payload: LoanApplication }) => {                
                return this.createLoanApplicationUsecase
                    .execute(payload.payload)
                    .pipe(
                        map((payload: LoanApplication) => {
                            const newPayload = { ...payload };
                            newPayload.status =
                                this.utilService.getRandomLoanStatus();
                            return newPayload;
                        }),
                        map((payload: LoanApplication) =>
                            saveCurrentLoanApplicationAction({
                                payload,
                            })
                        )
                    );
            })
        );
    });

    saveCurrentLoanApplication$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(
                CurrentLoanApplicationActionTypes.saveCurrentLoanApplication
            ),
            map((payload: { payload: LoanApplication }) => {
                return withdrawAmountAction({
                    payload: payload.payload.amount,
                });
            })
        );
    });

    constructor(
        private actions$: Actions,
        private createLoanApplicationUsecase: CreateLoanApplicationUsecase,
        private utilService: UtilService
    ) {}
}
