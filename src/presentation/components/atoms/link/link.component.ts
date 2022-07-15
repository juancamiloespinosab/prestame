import { Component, Input, OnInit } from '@angular/core';
import { linkDefaultValues } from '@presentation/components/constants';

@Component({
    selector: 'a-link',
    templateUrl: './link.component.html',
    styleUrls: ['./link.component.sass'],
})
export class LinkComponent implements OnInit {
    @Input() name: string = linkDefaultValues.name;
    @Input() routerLink: string = linkDefaultValues.routerLink;
    @Input() routerLinkActiveClassName: string = linkDefaultValues.routerLink;

    constructor() {}

    ngOnInit(): void {}
}
