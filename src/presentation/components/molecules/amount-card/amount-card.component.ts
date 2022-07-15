import { Component, Input, OnInit } from '@angular/core';
import { AMOUNT_CARD_INPUT_DEFAULT_VALUES } from '@presentation/components/constants';

@Component({
    selector: 'm-amount-card',
    templateUrl: './amount-card.component.html',
    styleUrls: ['./amount-card.component.sass'],
})
export class AmountCardComponent implements OnInit {
    @Input() label: string = AMOUNT_CARD_INPUT_DEFAULT_VALUES.LABEL;
    @Input() amount: number = AMOUNT_CARD_INPUT_DEFAULT_VALUES.AMOUNT;

    constructor() {}

    ngOnInit(): void {}
}
