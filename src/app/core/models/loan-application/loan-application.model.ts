import { Status } from './status.model';

export interface LoanApplication {
    id: number;
    amount: number;
    paymentDate: Date;
    status: Status;
}
