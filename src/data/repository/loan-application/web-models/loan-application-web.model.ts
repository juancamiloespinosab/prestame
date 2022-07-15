import { LOAN_STATUS } from '@core/models';

export interface LoanApplicationWeb {
    id: number;
    amount: number;
    paymentDate: Date | string;
    status: LOAN_STATUS;
    payed: boolean;
}
