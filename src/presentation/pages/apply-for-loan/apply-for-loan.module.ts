import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatStepperModule } from '@angular/material/stepper';

import { ApplyForLoanComponent } from './index/apply-for-loan.component';
import { ComponentsModule } from '@presentation/components/components.module';
import { StepperComponent } from './components/stepper/stepper.component';

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
        MatStepperModule,
        RouterModule.forChild(routes),
    ],
})
export class ApplyForLoanModule {}
