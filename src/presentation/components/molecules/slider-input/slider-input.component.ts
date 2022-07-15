import { Component, Input, OnInit } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { SLIDER_INPUT_DEFAULT_VALUES } from '@presentation/components/constants';
import { AppState } from '@presentation/interfaces';

@Component({
    selector: 'm-slider-input',
    templateUrl: './slider-input.component.html',
    styleUrls: ['./slider-input.component.sass'],
})
export class SliderInputComponent implements OnInit {
    @Input() value: number = SLIDER_INPUT_DEFAULT_VALUES.VALUE;
    @Input() minValue: number = SLIDER_INPUT_DEFAULT_VALUES.MIN_VALUE;
    @Input() maxValue: number = SLIDER_INPUT_DEFAULT_VALUES.MAX_VALUE;
    @Input() action: any;

    constructor(private store: Store<AppState>) {}

    ngOnInit(): void {}

    onInputSlider(newValue: number) {
        this.value = newValue;
        this.store.dispatch(this.action({ payload: newValue }));
    }
}
