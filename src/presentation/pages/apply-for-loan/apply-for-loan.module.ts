import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ApplyForLoanComponent } from './index/apply-for-loan.component';
import { ComponentsModule } from '@presentation/components/components.module';
import { StepperComponent } from './components/stepper/stepper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StateModule } from '@presentation/state/state.module';

const routes: Routes = [
    {
        path: '',
        component: ApplyForLoanComponent,
    },
];

@NgModule({
    declarations: [ApplyForLoanComponent, StepperComponent],
    imports: [
        CommonModule,
        ComponentsModule,
        ReactiveFormsModule,
        StateModule,
        RouterModule.forChild(routes),
    ],
})
export class ApplyForLoanModule {}
