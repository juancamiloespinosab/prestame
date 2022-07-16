import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { navigationLinks } from '@presentation/components/constants';
import { NavigationLink } from '@presentation/interfaces';
import { NavMobileService } from '@presentation/services/nav-mobile.service';
import { NavMobileComponent } from '../nav-mobile/nav-mobile.component';

@Component({
    selector: 'm-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.sass'],
})
export class NavComponent implements OnInit {
    navigationLinks: NavigationLink[] = navigationLinks;

    constructor(private navMobileService: NavMobileService) {}

    ngOnInit(): void {}

    openBottomSheet() {
        this.navMobileService.openBottomSheet()
    }
}
