import { Component, Input, OnInit } from '@angular/core';
import { iconDefaultValues } from '@presentation/components/constants';

@Component({
    selector: 'a-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.sass'],
})
export class IconComponent implements OnInit {
    @Input() iconName: string = iconDefaultValues.iconName;

    constructor() {}

    ngOnInit(): void {}
}
