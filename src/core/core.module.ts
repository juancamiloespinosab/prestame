import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRepository } from '@core/repositories';
import { UserWebRepository } from '@data/repository';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [{ provide: UserRepository, useClass: UserWebRepository }],
})
export class CoreModule {}
