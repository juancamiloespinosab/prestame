import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApprovedLoan, TableColumn } from '@presentation/interfaces';

@Component({
    selector: 'o-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.sass'],
})
export class TableComponent implements OnInit {
    @Input() columns: TableColumn[];
    displayedColumns: string[];

    @Input() dataSource: ApprovedLoan[] = [];

    constructor() {}

    ngOnInit(): void {
        this.displayedColumns = this.columns.map(
            (tableColumn: TableColumn) => tableColumn.caption
        );
    }
}
