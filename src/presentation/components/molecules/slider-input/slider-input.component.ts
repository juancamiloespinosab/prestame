import { Component, OnInit } from '@angular/core';
import { SLIDER_INPUT_DEFAULT_VALUES } from '@presentation/components/constants';

@Component({
    selector: 'm-slider-input',
    templateUrl: './slider-input.component.html',
    styleUrls: ['./slider-input.component.sass'],
})
export class SliderInputComponent implements OnInit {
    value: number = SLIDER_INPUT_DEFAULT_VALUES.VALUE;
    minValue: number = SLIDER_INPUT_DEFAULT_VALUES.MIN_VALUE;
    maxValue: number = SLIDER_INPUT_DEFAULT_VALUES.MAX_VALUE;

    constructor() {}

    ngOnInit(): void {
    }

    onInputSlider(newValue: number) {
        this.value = newValue;
    }
}
