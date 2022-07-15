import { Component, OnInit } from '@angular/core';
import { navigationLinks } from '@presentation/components/constants';
import { NavigationLink } from '@presentation/interfaces';

@Component({
    selector: 'm-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.sass'],
})
export class NavComponent implements OnInit {
    navigationLinks: NavigationLink[] = navigationLinks;

    constructor() {}

    ngOnInit(): void {}
}
