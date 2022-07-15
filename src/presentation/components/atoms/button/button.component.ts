import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BUTTON_DEFAULT_VALUES } from '@presentation/components/constants';

@Component({
    selector: 'a-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.sass'],
})
export class ButtonComponent implements OnInit {
    @Input() label: string = BUTTON_DEFAULT_VALUES.LABEL;
    @Input() color: string = BUTTON_DEFAULT_VALUES.COLOR;
    @Input() stepperButton: string = BUTTON_DEFAULT_VALUES.STEPER_BUTTON;

    @Output() onClickEvent: EventEmitter<boolean> = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}

    onClick() {
        this.onClickEvent.emit(true);
    }
}
