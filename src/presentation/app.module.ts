import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@core/core.module';
import { StateModule } from './state/state.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        CoreModule,
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        ComponentsModule,
        HttpClientModule,
        StateModule,
        AppRoutingModule
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
