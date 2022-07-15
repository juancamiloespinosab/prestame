import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Bank, LoanApplication } from '@core/models';
import { Store } from '@ngrx/store';
import { STEPPER_DEFAULT_VALUES } from '@presentation/components/constants';
import { AppState, Step } from '@presentation/interfaces';
import { UtilService } from '@presentation/services/util.service';
import {
    updateCurrentLoanApplicationPaymentDateAction,
    updateurrentLoanApplicationAmountAction,
} from '@presentation/state/actions';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'app-stepper',
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.sass'],
})
export class StepperComponent implements OnInit, OnDestroy {
    @Input() isLinear: boolean = STEPPER_DEFAULT_VALUES.IS_LINEAR;

    bankStateSubscription: Subscription;
    bankState$: Observable<Bank>;
    bankState: Bank;

    currentLoanAppplicationSubscription: Subscription;
    currentLoanAppplicationState$: Observable<LoanApplication>;
    currentLoanAppplicationState: LoanApplication;

    loanApplicationSteps: Step[] = [
        {
            number: 1,
            name: '¿Cúanto dinero necesitas?',
            showBackButton: false,
            backButtonLabel: 'REGRESAR',
            nextButtonLabel: 'CONTINUAR',
            items: [
                {
                    name: 'amount',
                    label: 'Monto a solicitar',
                    type: 'slider-input',
                    action: updateurrentLoanApplicationAmountAction,
                },
                {
                    name: 'paymentDate',
                    label: 'Fecha de pago (Opcional)',
                    type: 'datepicker',
                    action: updateCurrentLoanApplicationPaymentDateAction,
                },
            ],
        },
        {
            number: 2,
            name: 'Crea tu usuario',
            showBackButton: true,
            backButtonLabel: 'REGRESAR',
            nextButtonLabel: 'CONTINUAR',
            items: [
                {
                    name: 'name',
                    label: 'Nombre*',
                    type: 'input',
                },
                {
                    name: 'name',
                    label: 'Correo*',
                    type: 'input',
                },
                {
                    name: 'name',
                    label: 'Cédula*',
                    type: 'input',
                },
            ],
        },
    ];

    constructor(
        public utilService: UtilService,
        private store: Store<AppState>
    ) {}

    ngOnInit(): void {
        this.selectStores();
        this.subscribeToStates();
    }

    selectStores() {
        this.bankState$ = this.store.select('bank');
        this.currentLoanAppplicationState$ = this.store.select(
            'currentLoanApplication'
        );
    }

    subscribeToStates() {
        this.bankStateSubscription = this.bankState$.subscribe((data) => {
            this.bankState = data;
        });

        this.currentLoanAppplicationSubscription =
            this.currentLoanAppplicationState$.subscribe((data) => {
                this.currentLoanAppplicationState = data;
            });
    }

    test(event: any) {
        console.log('actual state -->', this.currentLoanAppplicationState);
    }

    ngOnDestroy() {
        this.bankStateSubscription.unsubscribe();
        this.currentLoanAppplicationSubscription.unsubscribe();
    }
}
