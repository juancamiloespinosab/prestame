import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { INPUT_DEFAULT_VALUES } from '@presentation/components/constants';
import { AppState } from '@presentation/interfaces';

@Component({
    selector: 'a-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.sass'],
})
export class InputComponent implements OnInit {
    @Input() name: string = INPUT_DEFAULT_VALUES.NAME;
    @Input() label: string = INPUT_DEFAULT_VALUES.LABEL;
    @Input() placeholder: string = INPUT_DEFAULT_VALUES.PLACEHOLDER;
    @Input() requiered: boolean = INPUT_DEFAULT_VALUES.REQUIERED;
    @Input() action: any;
    @Input() validators: any[];
    @Input() formGroup: FormGroup;

    inputFormControl: FormControl;

    constructor(private store: Store<AppState>) {}

    ngOnInit(): void {
        let validators = [];
        this.requiered ? validators.push(Validators.required) : null;
        this.validators
            ? (validators = [...validators, ...this.validators])
            : null;

        this.inputFormControl = new FormControl('', [...validators]);

        this.formGroup.addControl(this.name, this.inputFormControl);
    }

    onValueChange(event: any) {
        const newValue = event.target.value;

        if (this.inputFormControl.valid) {
            this.store.dispatch(this.action({ payload: newValue }));
        }
    }
}
