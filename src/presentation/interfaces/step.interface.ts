import { FormGroup } from '@angular/forms';

export interface Step {
    number: number;
    name: string;
    showBackButton: boolean;
    backButtonLabel: string;
    nextButtonLabel: string;
    items?: any[];
}
