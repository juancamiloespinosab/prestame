import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
    approvedLoansReducer,
    bankReducer,
    currentLoanApplicationReducer,
    currentUserReducer,
} from './reducers';
import { ApprovedLoansEffects } from '@state/effects';
import { CoreModule } from '@core/core.module';
import { CurrentLoanApplicationEffects } from './effects/current-loan-application.effect';

@NgModule({
    declarations: [],
    imports: [
        CoreModule,
        CommonModule,
        StoreModule.forRoot({
            approvedLoans: approvedLoansReducer,
            bank: bankReducer,
            currentLoanApplication: currentLoanApplicationReducer,
            currentUser: currentUserReducer,
        }),
        EffectsModule.forRoot([
            ApprovedLoansEffects,
            CurrentLoanApplicationEffects,
        ]),
    ],
    exports: [StoreModule, EffectsModule],
})
export class StateModule {}
