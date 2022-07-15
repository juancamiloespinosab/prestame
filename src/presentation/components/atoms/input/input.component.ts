import { Component, Input, OnInit } from '@angular/core';
import { inputDefaultValues } from '@presentation/components/constants';

@Component({
    selector: 'a-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.sass'],
})
export class InputComponent implements OnInit {
    @Input() label: string = inputDefaultValues.label;
    @Input() placeholder: string = inputDefaultValues.placeholder;

    constructor() {}

    ngOnInit(): void {}
}
