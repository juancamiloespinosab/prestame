import { Bank } from '@app/core/models';
import { Observable } from 'rxjs';

export abstract class BankRepository {
    abstract depositBank(amount: number): Observable<Bank>;
    abstract withdrawBank(amount: number): Observable<Bank>;
}
