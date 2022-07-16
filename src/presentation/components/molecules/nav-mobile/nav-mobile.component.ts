import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { navigationLinks } from '@presentation/components/constants';
import { NavigationLink } from '@presentation/interfaces';
import { NavMobileService } from '@presentation/services/nav-mobile.service';

@Component({
    selector: 'm-nav-mobile',
    templateUrl: './nav-mobile.component.html',
    styleUrls: ['./nav-mobile.component.sass'],
})
export class NavMobileComponent implements OnInit {
    navigationLinks: NavigationLink[] = navigationLinks;

    constructor(private navMobileService: NavMobileService) {}

    ngOnInit(): void {}

    closeBottomSheet() {
      
      this.navMobileService.closeBottomSheet()
  }
}
