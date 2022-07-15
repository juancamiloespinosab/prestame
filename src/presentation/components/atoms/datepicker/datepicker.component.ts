import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DATEPICKER_DEFAULT_VALUES } from '@presentation/components/constants';
import { AppState } from '@presentation/interfaces';

@Component({
    selector: 'a-datepicker',
    templateUrl: './datepicker.component.html',
    styleUrls: ['./datepicker.component.sass'],
})
export class DatepickerComponent implements OnInit {
    @Input() label: string = DATEPICKER_DEFAULT_VALUES.LABEL;
    @Input() action: any;

    constructor(private store: Store<AppState>) {}

    ngOnInit(): void {}

    onDateChange(event: any) {
        const newDate = event.value;
        this.store.dispatch(this.action({ payload: newDate }));
    }
}
