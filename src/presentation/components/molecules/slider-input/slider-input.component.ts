import { Component, OnInit } from '@angular/core';
import { sliderInputDefaultValues } from '@presentation/components/constants';

@Component({
    selector: 'm-slider-input',
    templateUrl: './slider-input.component.html',
    styleUrls: ['./slider-input.component.sass'],
})
export class SliderInputComponent implements OnInit {
    value: number = sliderInputDefaultValues.value;
    minValue: number = sliderInputDefaultValues.minValue;
    maxValue: number = sliderInputDefaultValues.maxValue;

    constructor() {}

    ngOnInit(): void {
    }

    onInputSlider(newValue: number) {
        this.value = newValue;
    }
}
