import { Component, OnInit } from "@angular/core"
import { DataService } from "../shared/dataService";
import { Material } from "../shared/material";

@Component({
    selector: "material-list",
    templateUrl: "materialList.component.html",
    styleUrls: []
})
export class MaterialList implements OnInit {
    constructor(private data: DataService) {
    }

    public materials: Material[] = [];

    ngOnInit(): void {
        this.data.loadMaterials()
            .subscribe(success => {
                if (success) {
                    this.materials = this.data.materials;
                };
            });
    }
}