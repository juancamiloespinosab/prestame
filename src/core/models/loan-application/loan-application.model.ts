import { LoanStatus } from './loan-status.model';

export interface LoanApplication {
    id: number;
    amount: number;
    paymentDate: Date;
    status: LoanStatus;
    payed: boolean;
}
