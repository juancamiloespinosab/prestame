import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanApplicationRepository, UserRepository } from '@core/repositories';
import {
    LoanApplicationWebRepository,
    UserWebRepository,
} from '@data/repository';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [
        { provide: UserRepository, useClass: UserWebRepository },
        {
            provide: LoanApplicationRepository,
            useClass: LoanApplicationWebRepository,
        },
    ],
})
export class CoreModule {}
