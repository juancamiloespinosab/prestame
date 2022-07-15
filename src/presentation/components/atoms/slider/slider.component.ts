import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { SLIDER_DEFAULT_VALUES } from '@presentation/components/constants';

@Component({
    selector: 'a-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.sass'],
})
export class SliderComponent implements OnInit {
    @Input() color: string = SLIDER_DEFAULT_VALUES.COLOR;
    @Input() minValue: number = SLIDER_DEFAULT_VALUES.MIN_VALUE;
    @Input() maxValue: number = SLIDER_DEFAULT_VALUES.MAX_VALUE;
    @Input() value: number = SLIDER_DEFAULT_VALUES.VALUE;

    @Output() OnInputEvent: EventEmitter<number> = new EventEmitter<number>;
    @Output() OnChangeEvent: EventEmitter<number> = new EventEmitter<number>;

    constructor() {}

    ngOnInit(): void {}

    onInput(event: MatSliderChange) {
        const value = event.value;
        if (value) this.OnInputEvent.emit(value)
    }

    onChange(event: MatSliderChange) {
        const value = event.value;
        if (value) this.OnChangeEvent.emit(value)
    }
}
