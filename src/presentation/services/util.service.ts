import { Injectable } from '@angular/core';
import { LOAN_STATUS } from '@core/models';

@Injectable({
    providedIn: 'root',
})
export class UtilService {
    getObjectKeys(object: Object) {
        return Object.keys(object);
    }

    getRandomLoanStatus() {
        const time = new Date().getMilliseconds() % 2;
        if (time == 0) {
            return LOAN_STATUS.APPROVED;
        }

        return LOAN_STATUS.REJECTED;
    }
}
