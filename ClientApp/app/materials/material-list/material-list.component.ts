import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/dataService';
import { Material } from '../../shared/material';
import { MatDialog, MatDialogConfig, MatSnackBar } from '@angular/material';

import { MaterialDetailComponent } from '../material-detail/material-detail.component';
import { PromptComponent } from '../../prompt/prompt.component';

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

    private rowSelection = "single";
    private selectedRow;
    private columnDefs = [
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

    constructor(private data: DataService, public dialog: MatDialog,
        public snackBar: MatSnackBar) { }

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
        this.gridColumnApi = params.columnApi;

        this.data.loadMaterials()
            .subscribe(success => {
                if (success) {
                    this.materials = this.data.materials;
                    this.autoSizeAll();
                }
            });
    }

    onSelectionChanged() {
        var selectedRows = this.gridApi.getSelectedRows();
        if (selectedRows.length > 0) {
            this.selectedRow = selectedRows[0];
            console.log(`Selected row: ${this.selectedRow.partNumber}`);
        } else {
            this.selectedRow = null;
        }
    }

    delete(): void {
        this.data.deleteMaterial(this.selectedRow.id)
            .subscribe(success => {
                if (success) {
                    this.openSnackBar(`${this.selectedRow.partNumber} was deleted`, "Delete");
                    var selectedData = this.gridApi.getSelectedRows();
                    var res = this.gridApi.updateRowData({ remove: selectedData });
                }
            });
    }

    openDialog(): void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.disableClose = true;
        dialogConfig.closeOnNavigation = true;
        dialogConfig.data = {};

        let dialogRef = this.dialog.open(MaterialDetailComponent, dialogConfig);

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.gridApi.updateRowData({ add: [result] });
            } else {
                console.log('The dialog was closed without result');
            }
        });
    }

    confirmDelete(): void {
        if (!this.selectedRow) {
            return;
        }

        let dialogRef = this.dialog.open(PromptComponent, {
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.delete();
            }
        });
    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2000
        });
    }
}
