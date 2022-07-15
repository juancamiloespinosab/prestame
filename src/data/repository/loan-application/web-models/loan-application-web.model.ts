import { LoanStatus } from '@core/models';

export interface LoanApplicationWeb {
    id: number;
    amount: number;
    paymentDate: Date;
    status: LoanStatus;
    payed: boolean;
}
