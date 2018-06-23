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

    columnDefs = [
        { headerName: 'Material Name', field: 'name' },
        { headerName: 'Description', field: 'description' }
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
