import { Injectable } from "@angular/core";
import { Bank } from "@core/models";
import { BankRepository } from "@core/repositories";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class WithdrawBankUsecase {
    constructor(private BankRepository: BankRepository) {}

    execute(amount: number): Observable<Bank> {
        return this.BankRepository.withdrawBank(amount);
    }
}