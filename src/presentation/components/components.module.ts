import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';

import { IconComponent } from './atoms/icon/icon.component';
import { LinkComponent } from './atoms/link/link.component';
import { ButtonComponent } from './atoms/button/button.component';
import { TextComponent } from './atoms/text/text.component';
import { InputComponent } from './atoms/input/input.component';
import { SliderComponent } from './atoms/slider/slider.component';
import { SliderInputComponent } from './molecules/slider-input/slider-input.component';
import { NavComponent } from './molecules/nav/nav.component';
import { AmountCardComponent } from './molecules/amount-card/amount-card.component';
import { LoanFormComponent } from './molecules/loan-form/loan-form.component';

@NgModule({
    declarations: [
        IconComponent,
        LinkComponent,
        ButtonComponent,
        TextComponent,
        InputComponent,
        SliderComponent,
        SliderInputComponent,
        NavComponent,
        AmountCardComponent,
        LoanFormComponent,
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatSliderModule,
        RouterModule
    ],
    exports: [
        IconComponent,
        LinkComponent,
        ButtonComponent,
        TextComponent,
        InputComponent,
        SliderComponent,
        SliderInputComponent,
        NavComponent,
        AmountCardComponent
    ],
})
export class ComponentsModule {}
