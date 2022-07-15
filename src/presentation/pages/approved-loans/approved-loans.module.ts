import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ApprovedLoansComponent } from './approved-loans/approved-loans.component';
import { ComponentsModule } from '@presentation/components/components.module';

const routes: Routes = [
    {
        path: '',
        component: ApprovedLoansComponent,
    },
];

@NgModule({
    declarations: [ApprovedLoansComponent],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
})
export class ApprovedLoansModule {}
