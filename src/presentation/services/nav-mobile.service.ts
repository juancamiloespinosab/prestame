import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { NavMobileComponent } from '@presentation/components/molecules/nav-mobile/nav-mobile.component';

@Injectable({
    providedIn: 'root',
})
export class NavMobileService {
    constructor(private _bottomSheet: MatBottomSheet) {}

    openBottomSheet(): void {
      this._bottomSheet.open(NavMobileComponent);
    }

    closeBottomSheet(): void {
      
        this._bottomSheet.dismiss(NavMobileComponent);
    }
}
