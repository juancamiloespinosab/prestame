import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LINK_DEFAULT_VALUES } from '@presentation/components/constants';

@Component({
    selector: 'a-link',
    templateUrl: './link.component.html',
    styleUrls: ['./link.component.sass'],
})
export class LinkComponent implements OnInit {
    @Input() name: string = LINK_DEFAULT_VALUES.NAME;
    @Input() routerLink: string = LINK_DEFAULT_VALUES.ROUTER_LINK;
    @Input() routerLinkActiveClassName: string =
        LINK_DEFAULT_VALUES.ROUTER_LINK_ACTIVE_CLASS_NAME;

    @Output() onClickEvent: EventEmitter<boolean> = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}

    onClick() {
        this.onClickEvent.emit(true);
    }
}
