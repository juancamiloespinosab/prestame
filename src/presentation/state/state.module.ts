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

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forRoot({
            'approvedLoans': approvedLoansReducer,
            'bank': bankReducer,
            'currentLoanApplication': currentLoanApplicationReducer,
            'currentUser': currentUserReducer,
        }),
        EffectsModule.forRoot([ApprovedLoansEffects]),
    ],
    exports: [StoreModule, EffectsModule],
})
export class StateModule {}
