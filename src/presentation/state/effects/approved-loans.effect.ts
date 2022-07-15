import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';

import {
    ApprovedLoansActionTypes,
    saveAllLoanApplicationsByStatusAction,
} from '@state/actions';
import { LoanApplication, LOAN_STATUS } from '@core/models';
import { ListAllLoanApplicationsByStatusUsecase } from '@core/usecases/loan-application/list-all-loan-applications-by-status.usecase';

@Injectable()
export class ApprovedLoansEffects {
    listAllLoanApplicationsByStatus$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ApprovedLoansActionTypes.listAllLoanApplicationsByStatus),
            mergeMap((payload: LOAN_STATUS) =>
                this.listAllLoanApplicationsByStatusUsecase
                    .execute(payload)
                    .pipe(
                        map((payload: LoanApplication[]) =>
                            saveAllLoanApplicationsByStatusAction({
                                payload,
                            })
                        )
                    )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private listAllLoanApplicationsByStatusUsecase: ListAllLoanApplicationsByStatusUsecase
    ) {}
}
