import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoanApplication, LOAN_STATUS, User } from '@core/models';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { LoanApplicationWebRepositoryAdapter } from '@data/repository';
import { LoanApplicationRepository } from '@core/repositories';

@Injectable({
    providedIn: 'root',
})
export class LoanApplicationWebRepository extends LoanApplicationRepository {
    mockLocalApi = environment.mockLocalApi;
    loanApplicationWebRepositoryAdapter = new LoanApplicationWebRepositoryAdapter();

    url = `${this.mockLocalApi.baseUrl}/${this.mockLocalApi.paths.loans}`;

    constructor(private httpClient: HttpClient) {
        super();
    }

    createLoanApplication(
        loanApplication: LoanApplication
    ): Observable<LoanApplication> {
        return this.httpClient.post<LoanApplication>(this.url, loanApplication);
    }

    payLoanApplication(loanApplicationId: number) {
        return this.httpClient.put(this.url, loanApplicationId);
    }

    listAllLoanApplicationsByStatus(
        status: LOAN_STATUS
    ): Observable<LoanApplication[]> {
        const params = new HttpParams();
        params.append('status', status);

        return this.httpClient.get<LoanApplication[]>(this.url, { params });
    }
}
