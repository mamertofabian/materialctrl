import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/dataService';
import { Material } from '../../shared/material';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { MaterialDetailComponent } from '../material-detail/material-detail.component';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.scss']
})
export class MaterialListComponent implements OnInit {
    private gridColumnApi;
    private gridApi;
    public materials: Material[] = [];

    //displayedColumns = ['name', 'description'];
    //dataSource = this.materials;

    columnDefs = [
        { headerName: 'Part Number', field: 'partNumber' },
        { headerName: 'Part Name', field: 'partName' },
        { headerName: 'Revision', field: 'revision' },
        { headerName: 'Description', field: 'description' },
        { headerName: 'Category', field: 'category' },
        { headerName: 'Unit', field: 'unit' },
        { headerName: 'Manufacturer', field: 'manufacturer' },
        { headerName: 'Manufacturer Part Number', field: 'manufacturerPartNumber' },
        { headerName: 'Procurement Type', field: 'procurementType' },
        { headerName: 'Notes', field: 'notes' },
        { headerName: 'Created On', field: 'createdOn' },
        { headerName: 'Modified On', field: 'modifiedOn' },
        { headerName: 'Created By', field: 'createdBy' },
        { headerName: 'Modified By', field: 'modifiedBy' }
    ]

    constructor(private data: DataService, public dialog: MatDialog) { }

    ngOnInit(): void {
    }

    sizeToFit() {
        this.gridApi.sizeColumnsToFit();
    }

    autoSizeAll() {
        var allColumnIds = [];
        this.gridColumnApi.getAllColumns().forEach(function (column) {
            allColumnIds.push(column.colId);
        });
        this.gridColumnApi.autoSizeColumns(allColumnIds);
    }

    onGridReady(params) {
        this.gridApi = params.api;

        this.data.loadMaterials()
            .subscribe(success => {
                if (success) {
                    this.materials = this.data.materials;
                    this.sizeToFit();
                }
            });
    }

    openDialog(): void {
        const dialogConfig = new MatDialogConfig();

        let dialogRef = this.dialog.open(MaterialDetailComponent, {
            autoFocus: true,
            disableClose: true,
            closeOnNavigation: true,
            data: {}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
