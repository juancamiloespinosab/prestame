import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LoanApplication, LOAN_STATUS, User } from '@core/models';
import { Store } from '@ngrx/store';
import { ApprovedLoan, AppState, TableColumn } from '@presentation/interfaces';
import {
    listAllLoanApplicationsByFiltersAction,
    payOneLoanApplicationByIdAction,
} from '@presentation/state/actions';
import { Observable, Subscription } from 'rxjs';
import { ApprovedLoansAdapter } from '../../adapters/approved-loans.adapter';

@Component({
    selector: 'app-table-container',
    templateUrl: './table-container.component.html',
    styleUrls: ['./table-container.component.sass'],
})
export class TableContainerComponent implements OnInit, OnDestroy {
    myColumns: TableColumn[] = [
        { caption: 'No', field: 'number', type: 'text' },
        { caption: 'Monto', field: 'amount', type: 'currency' },
        { caption: 'Name', field: 'userName', type: 'text' },
        {
            caption: ' ',
            field: '',
            type: 'action',
            action: payOneLoanApplicationByIdAction,
        },
    ];

    approvedLoansSubscription: Subscription;
    approvedLoansState$: Observable<LoanApplication[]>;
    approvedLoansState: ApprovedLoan[];

    approvedLoansAdapter = new ApprovedLoansAdapter();

    constructor(private store: Store<AppState>) {}

    ngOnInit(): void {
        this.selectStore();
        this.subscribeToState();
        this.loadDataSource();
    }

    selectStore() {
        this.approvedLoansState$ = this.store.select('approvedLoans');
    }

    subscribeToState() {
        this.approvedLoansSubscription = this.approvedLoansState$.subscribe(
            (data) => {
                this.approvedLoansState =
                    this.approvedLoansAdapter.mapFrom(data);
            }
        );
    }

    loadDataSource() {
        this.store.dispatch(
            listAllLoanApplicationsByFiltersAction({
                status: LOAN_STATUS.APPROVED,
                payed: false,
            })
        );
    }

    ngOnDestroy() {
        this.approvedLoansSubscription.unsubscribe();
    }
}
