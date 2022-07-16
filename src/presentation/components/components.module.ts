import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

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
import { MainLayoutComponent } from './templates/main-layout/main-layout.component';
import { HeaderComponent } from './organisms/header/header.component';
import { DatepickerComponent } from './atoms/datepicker/datepicker.component';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '@core/core.module';
import { NavMobileComponent } from './molecules/nav-mobile/nav-mobile.component';
import { TableComponent } from './organisms/table/table.component';

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
        MainLayoutComponent,
        HeaderComponent,
        DatepickerComponent,
        NavMobileComponent,
        TableComponent,
    ],
    imports: [
        CoreModule,
        CommonModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatSliderModule,
        MatToolbarModule,
        MatCardModule,
        MatStepperModule,
        MatDatepickerModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        MatSidenavModule,
        RouterModule,
        MatTableModule,
        MatBottomSheetModule,
    ],
    exports: [
        MatStepperModule,
        IconComponent,
        LinkComponent,
        ButtonComponent,
        TextComponent,
        InputComponent,
        SliderComponent,
        SliderInputComponent,
        NavComponent,
        AmountCardComponent,
        MainLayoutComponent,
        HeaderComponent,
        DatepickerComponent,
        TableComponent,
        NavMobileComponent,
        MatBottomSheetModule
    ],
})
export class ComponentsModule {}
