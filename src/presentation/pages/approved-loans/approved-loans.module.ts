import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '@presentation/components/components.module';
import { ApprovedLoansComponent } from './index/approved-loans.component';
import { TableContainerComponent } from './components/table-container/table-container.component';

const routes: Routes = [
    {
        path: '',
        component: ApprovedLoansComponent,
    },
];

@NgModule({
    declarations: [ApprovedLoansComponent, TableContainerComponent],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
})
export class ApprovedLoansModule {}
