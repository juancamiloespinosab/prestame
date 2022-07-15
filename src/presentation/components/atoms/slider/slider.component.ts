import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { sliderDefaultValues } from '@presentation/components/constants';

@Component({
    selector: 'a-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.sass'],
})
export class SliderComponent implements OnInit {
    @Input() color: string = sliderDefaultValues.color;
    @Input() minValue: number = sliderDefaultValues.minValue;
    @Input() maxValue: number = sliderDefaultValues.maxValue;
    @Input() value: number = sliderDefaultValues.value;

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
