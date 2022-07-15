import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'apply-for-loan',
        loadChildren: () =>
            import(
                '@presentation/pages/apply-for-loan/apply-for-loan.module'
            ).then((m) => m.ApplyForLoanModule),
    },
    {
        path: 'approved-loans',
        loadChildren: () =>
            import(
                '@presentation/pages/approved-loans/approved-loans.module'
            ).then((m) => m.ApprovedLoansModule),
    },
    {
        path: '**',
        redirectTo: 'apply-for-loan'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
