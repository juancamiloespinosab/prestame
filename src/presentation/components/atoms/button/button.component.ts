import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { BUTTON_DEFAULT_VALUES } from '@presentation/components/constants';
import { AppState } from '@presentation/interfaces';

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

    @Input() action: any;
    @Input() actionParams: any;

    @Output() onClickEvent: EventEmitter<boolean> = new EventEmitter();

    constructor(private store: Store<AppState>) {}

    ngOnInit(): void {}

    onClick() {
        this.onClickEvent.emit(true);

        if (this.action) {
            this.store.dispatch(this.action({ payload: this.actionParams }));
        }
    }
}
