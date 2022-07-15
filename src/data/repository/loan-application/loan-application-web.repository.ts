import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoanApplication, LOAN_STATUS, User } from '@core/models';
import { LoanApplicationRepository, UserRepository } from '@core/repositories';
import { environment } from '@environments/environment';
import { map, Observable } from 'rxjs';
import {
    LoanApplicationWebRepositoryAdapter,
    UserWebRepositoryAdapter,
} from '@data/repository';
import { UserWeb } from '@data/repository';

@Injectable({
    providedIn: 'root',
})
export class LoanApplicationWebRepository extends LoanApplicationRepository {
    mockLocalApi = environment.mockLocalApi;
    loanApplicationWebRepositoryAdapter =
        new LoanApplicationWebRepositoryAdapter();
    url = `${this.mockLocalApi.baseUrl}/${this.mockLocalApi.paths.loans}`;

    constructor(private httpClient: HttpClient) {
        super();
    }

    createLoanApplication(
        loanApplication: LoanApplication
    ): Observable<LOAN_STATUS> {
        return this.httpClient.post<LOAN_STATUS>(this.url, loanApplication);
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