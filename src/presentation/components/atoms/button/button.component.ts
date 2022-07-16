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
    @Input() type: string = BUTTON_DEFAULT_VALUES.TYPE;
    @Input() disabled: boolean = BUTTON_DEFAULT_VALUES.DISABLED;

    @Output() onClickEvent: EventEmitter<boolean> = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}

    onClick() {
        this.onClickEvent.emit(true);
    }
}
