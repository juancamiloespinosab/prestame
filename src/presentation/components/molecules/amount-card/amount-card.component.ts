import { Component, Input, OnInit } from '@angular/core';
import { Bank } from '@core/models';
import { Store } from '@ngrx/store';
import { AMOUNT_CARD_INPUT_DEFAULT_VALUES } from '@presentation/components/constants';
import { AppState } from '@presentation/interfaces';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'm-amount-card',
    templateUrl: './amount-card.component.html',
    styleUrls: ['./amount-card.component.sass'],
})
export class AmountCardComponent implements OnInit {
    @Input() label: string = AMOUNT_CARD_INPUT_DEFAULT_VALUES.LABEL;
    @Input() amount: number = AMOUNT_CARD_INPUT_DEFAULT_VALUES.AMOUNT;

    bankStateSubscription: Subscription;
    bankState$: Observable<Bank>;
    bankState: Bank;

    constructor(private store: Store<AppState>) {}

    ngOnInit(): void {
        this.selectStores();
        this.subscribeToStates();
    }

    selectStores() {
        this.bankState$ = this.store.select('bank');
    }

    subscribeToStates() {
        this.bankStateSubscription = this.bankState$.subscribe((data) => {
            this.bankState = data;
            this.amount = this.bankState.baseAmount;
        });
    }
}
