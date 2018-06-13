import { Component, OnInit } from "@angular/core"
import { DataService } from "../shared/dataService";

@Component({
    selector: "material-list",
    templateUrl: "materialList.component.html",
    styleUrls: []
})
export class MaterialList implements OnInit {
    constructor(private data: DataService) {
    }

    public materials = [];

    ngOnInit(): void {
        this.data.loadMaterials()
            .subscribe(success => {
                if (success) {
                    this.materials = this.data.materials;
                };
            });
    }
}