import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/dataService';
import { Material } from '../shared/material';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit {
    constructor(private data: DataService) { }

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

    ngOnInit(): void {
        this.data.loadMaterials()
            .subscribe(success => {
                if (success) {
                    this.materials = this.data.materials;
                }
            })
  }

}
