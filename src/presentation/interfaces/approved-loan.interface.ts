import { LoanApplication } from "@core/models";

export interface ApprovedLoan {
    number: number,
    amount: number,
    userName: string,
    allData: LoanApplication
}