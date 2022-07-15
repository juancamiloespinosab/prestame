import { Component, Input, OnInit } from '@angular/core';
import { STEPPER_DEFAULT_VALUES } from '@presentation/components/constants';

@Component({
    selector: 'app-stepper',
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.sass'],
})
export class StepperComponent implements OnInit {
    @Input() isLinear: boolean = STEPPER_DEFAULT_VALUES.IS_LINEAR;

    constructor() {}

    ngOnInit(): void {}
}
