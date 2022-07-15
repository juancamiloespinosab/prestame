import { Component, Input, OnInit } from '@angular/core';
import { amountCardDefaultValues } from '@presentation/components/constants';

@Component({
    selector: 'm-amount-card',
    templateUrl: './amount-card.component.html',
    styleUrls: ['./amount-card.component.sass'],
})
export class AmountCardComponent implements OnInit {
    @Input() label: string = amountCardDefaultValues.label;
    @Input() amount: number = amountCardDefaultValues.amount;

    constructor() {}

    ngOnInit(): void {}
}
