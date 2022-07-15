import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { buttonDefaultValues } from '@presentation/components/constants';

@Component({
    selector: 'a-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.sass'],
})
export class ButtonComponent implements OnInit {
    @Input() label: string = buttonDefaultValues.label;
    @Input() color: string = buttonDefaultValues.color;
    @Output() onClickEvent: EventEmitter<boolean> = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}

    onClick() {
        this.onClickEvent.emit(true);
    }
}
