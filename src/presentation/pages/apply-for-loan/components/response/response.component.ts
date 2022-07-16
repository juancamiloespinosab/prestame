import { Component, Input, OnInit } from '@angular/core';
import { LOAN_STATUS } from '@core/models';
import { RESPONSE_DEFAULT_VALUES } from '@presentation/components/constants';

@Component({
    selector: 'app-response',
    templateUrl: './response.component.html',
    styleUrls: ['./response.component.sass'],
})
export class ResponseComponent implements OnInit {
    @Input() currentLoanStatus: LOAN_STATUS;
    responseValues = RESPONSE_DEFAULT_VALUES;
    currentResponseValue: any;

    constructor() {}

    ngOnInit(): void {
        this.currentResponseValue = this.findResponseValues();
    }

    findResponseValues() {
        return this.responseValues.find(
            (responseValue) => responseValue.status == this.currentLoanStatus
        );
    }

    ngOnChanges() {
        this.currentResponseValue = this.findResponseValues();
    }
}
