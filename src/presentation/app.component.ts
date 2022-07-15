import { Component } from '@angular/core';
import { LOAN_STATUS } from '@core/models';
import { Store } from '@ngrx/store';
import { AppState } from './interfaces/AppState';
import { depositAmountAction, listAllLoanApplicationsByStatusAction, withdrawAmountAction } from './state/actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
})
export class AppComponent {
    state$: any;

    constructor(private store: Store<AppState>) {}

    ngOnInit() {
        this.selectStore();
        this.subscribeToState();
    }

    selectStore() {
        this.state$ = this.store.select('bank');
    }

    subscribeToState() {
        this.state$.subscribe((data: any) => {
            console.log('state --->', data);
        });
    }

    test(e: any) {
        console.log(22);
        
        // this.store.dispatch(
        //     withdrawAmountAction({
        //         payload: 1000,
        //     })
        // );
        // this.store.dispatch(
        //     listAllLoanApplicationsByStatusAction({
        //         payload: LOAN_STATUS.APPROVED,
        //     })
        // );
    }
}
