import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
    debounceTime,
    map,
    merge,
    mergeMap,
    Observable,
    Subscription,
    tap,
} from 'rxjs';

import {
    ApprovedLoansActionTypes,
    createCurrentUserAction,
    CurrentLoanApplicationActionTypes,
    resetCurrentLoanApplicationAction,
    saveCurrentLoanApplicationAction,
    withdrawAmountAction,
} from '@state/actions';
import { LoanApplication, LOAN_STATUS, User } from '@core/models';
import {
    CreateLoanApplicationUsecase,
    CreateUserUsecase,
} from '@core/usecases';
import { AppState } from '@presentation/interfaces';
import { Store } from '@ngrx/store';
import { UtilService } from '@presentation/services/util.service';

@Injectable()
export class CurrentLoanApplicationEffects {
    currentUser: User;
    currentLoanApplication: LoanApplication;

    currentLoanApplication$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(
                CurrentLoanApplicationActionTypes.createCurrentLoanApplication
            ),
            debounceTime(2000),
            mergeMap(
                (payload: {
                    payload: { loanApplication: LoanApplication; user: User };
                }) => {
                    this.currentUser = payload.payload.user;
                    this.currentLoanApplication =
                        payload.payload.loanApplication;

                    return this.createLoanApplicationUsecase.execute(
                        payload.payload.loanApplication
                    );
                }
            ),
            mergeMap((payload: LoanApplication) => {
                return this.createUserUsecase
                    .execute({
                        ...this.currentUser,
                        loanApplicationId: payload.id,
                    })
                    .pipe(
                        map((payload: LoanApplication) => {
                            return saveCurrentLoanApplicationAction({
                                payload: this.currentLoanApplication,
                            });
                        })
                    );
            })
        );
    });

    saveCurrentLoanApplication$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(
                CurrentLoanApplicationActionTypes.saveCurrentLoanApplication
            ),
            map((payload: LoanApplication) => {
                return withdrawAmountAction({
                    payload:
                        this.currentLoanApplication.status ==
                        LOAN_STATUS.APPROVED
                            ? this.currentLoanApplication.amount
                            : 0,
                });
            })
        );
    });

    constructor(
        private actions$: Actions,
        private createLoanApplicationUsecase: CreateLoanApplicationUsecase,
        private createUserUsecase: CreateUserUsecase
    ) {}
}
