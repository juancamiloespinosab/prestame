import { Injectable } from "@angular/core";
import { Bank } from "@app/core/models";
import { BankRepository } from "@app/core/repositories";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DepositBankUsecase {
    constructor(private BankRepository: BankRepository) {}

    execute(amount: number): Observable<Bank> {
        return this.BankRepository.depositBank(amount);
    }
}