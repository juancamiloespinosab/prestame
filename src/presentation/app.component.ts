import { Component } from '@angular/core';
import { CreateUserUsecase } from '@core/usecases';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
})
export class AppComponent {
    title = 'PRESTAME';

    constructor(private createUser: CreateUserUsecase) {}

    ngOnInit() {
        console.log(1);

        this.createUser.execute({
            id: 0,
            name: 'Juanito',
            email: 'juan.test@email.com',
            document: 1106899,
            loanApplicationId: 2,
        }).subscribe( data => console.log(data))
    }
}
