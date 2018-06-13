import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

    constructor(private http: HttpClient) {}

    public materials = [];

    loadMaterials() {
        return this.http.get("api/materials")
            .map((data: any[]) => {
                this.materials = data;
                return true;
            });
    }
}