import { FormGroup } from '@angular/forms';

export interface Step {
    number: number;
    name: string;
    hideButtons?: boolean;
    showBackButton: boolean;
    backButtonLabel: string;
    nextButtonLabel: string;
    items?: any[];
    formGroup?: FormGroup;
    nextButtonAction?: any;
}
