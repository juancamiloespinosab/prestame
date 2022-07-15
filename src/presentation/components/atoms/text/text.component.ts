import { Component, Input, OnInit } from '@angular/core';
import { TEXT_DEFAULT_VALUES } from '@presentation/components/constants';

@Component({
    selector: 'a-text',
    templateUrl: './text.component.html',
    styleUrls: ['./text.component.sass'],
})
export class TextComponent implements OnInit {
    @Input() text: string = TEXT_DEFAULT_VALUES.TEXT;

    constructor() {}

    ngOnInit(): void {}
}
