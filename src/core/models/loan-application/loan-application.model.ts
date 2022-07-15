import { LOAN_STATUS } from './loan-status.model';

export interface LoanApplication {
    id: number;
    amount: number;
    paymentDate: Date | string;
    status: LOAN_STATUS;
    payed: boolean;
}
