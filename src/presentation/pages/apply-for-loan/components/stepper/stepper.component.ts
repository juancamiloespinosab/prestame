import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Bank, LoanApplication, LOAN_STATUS, User } from '@core/models';
import { Store } from '@ngrx/store';
import { STEPPER_DEFAULT_VALUES } from '@presentation/components/constants';
import { AppState, Step } from '@presentation/interfaces';
import { UtilService } from '@presentation/services/util.service';
import {
    createCurrentLoanApplicationAction,
    resetCurrentLoanApplicationAction,
    updateCurrentLoanApplicationPaymentDateAction,
    updateCurrentLoanApplicationStatusAction,
    updateCurrentUserDocumentAction,
    updateCurrentUserEmailAction,
    updateCurrentUserNameAction,
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

    currentUserSubscription: Subscription;
    currentUserState$: Observable<User>;
    currentUserState: User;

    loanApplicationSteps: Step[] = [
        {
            number: 1,
            name: '¿Cúanto dinero necesitas?',
            showBackButton: false,
            backButtonLabel: 'REGRESAR',
            nextButtonLabel: 'CONTINUAR',
            formGroup: new FormGroup({}),
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
            nextButtonAction: createCurrentLoanApplicationAction,
            formGroup: new FormGroup({}),
            items: [
                {
                    name: 'name',
                    label: 'Nombre',
                    type: 'input',
                    action: updateCurrentUserNameAction,
                    requiered: true,
                },
                {
                    name: 'email',
                    label: 'Correo',
                    type: 'input',
                    action: updateCurrentUserEmailAction,
                    requiered: true,
                    // validators: [Validators.email],
                },
                {
                    name: 'document',
                    label: 'Cédula',
                    type: 'input',
                    action: updateCurrentUserDocumentAction,
                    requiered: true,
                    // validators: [Validators.pattern(/^([0-9])*$/)],
                },
            ],
        },
        {
            number: 3,
            name: 'Respuesta',
            hideButtons: true,
            showBackButton: false,
            backButtonLabel: 'REGRESAR',
            nextButtonLabel: 'CONTINUAR',
            items: [
                {
                    name: 'name',
                    label: 'Nombre',
                    type: 'response',
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
        this.currentUserState$ = this.store.select('currentUser');
    }

    subscribeToStates() {
        this.bankStateSubscription = this.bankState$.subscribe((data) => {
            this.bankState = data;
        });

        this.currentLoanAppplicationSubscription =
            this.currentLoanAppplicationState$.subscribe((data) => {
                this.currentLoanAppplicationState = data;                
            });

        this.currentUserSubscription = this.currentUserState$.subscribe(
            (data) => {
                this.currentUserState = data;
            }
        );
    }

    dispatchCreateAction(action: any, payload: any) {
        this.store.dispatch(updateCurrentLoanApplicationStatusAction({ payload: LOAN_STATUS.PENDING }));
        this.store.dispatch(action({ payload }));
    }

    ngOnDestroy() {
        this.bankStateSubscription.unsubscribe();
        this.currentLoanAppplicationSubscription.unsubscribe();
        this.currentUserSubscription.unsubscribe();
    }
}
