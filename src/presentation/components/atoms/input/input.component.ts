import { Component, Input, OnInit } from '@angular/core';
import { INPUT_DEFAULT_VALUES } from '@presentation/components/constants';

@Component({
    selector: 'a-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.sass'],
})
export class InputComponent implements OnInit {
    @Input() label: string = INPUT_DEFAULT_VALUES.LABEL;
    @Input() placeholder: string = INPUT_DEFAULT_VALUES.PLACEHOLDER;

    constructor() {}

    ngOnInit(): void {}
}
