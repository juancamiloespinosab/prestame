import { Component, Input, OnInit } from '@angular/core';
import { textDefaultValues } from '@presentation/components/constants';

@Component({
    selector: 'a-text',
    templateUrl: './text.component.html',
    styleUrls: ['./text.component.sass'],
})
export class TextComponent implements OnInit {
    @Input() text: string = textDefaultValues.text;

    constructor() {}

    ngOnInit(): void {}
}
