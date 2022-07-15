import { Component, Input, OnInit } from '@angular/core';
import { ICON_DEFAULT_VALUES } from '@presentation/components/constants';

@Component({
    selector: 'a-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.sass'],
})
export class IconComponent implements OnInit {
    @Input() iconName: string = ICON_DEFAULT_VALUES.ICON_NAME;

    constructor() {}

    ngOnInit(): void {}
}
