import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '@presentation/components/components.module';
import { ApprovedLoansComponent } from './index/approved-loans.component';
import { StateModule } from '@presentation/state/state.module';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
    {
        path: '',
        component: ApprovedLoansComponent,
    },
];

@NgModule({
    declarations: [ApprovedLoansComponent, TableComponent],
    imports: [CommonModule, ComponentsModule, StateModule, RouterModule.forChild(routes)],
})
export class ApprovedLoansModule {}
