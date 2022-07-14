import { Injectable } from '@angular/core';
import { Bank } from '@core/models';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export abstract class BankRepository {
    abstract depositBank(amount: number): Observable<Bank>;
    abstract withdrawBank(amount: number): Observable<Bank>;
}
