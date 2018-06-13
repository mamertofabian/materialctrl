import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import { Material } from "./material";

@Injectable()
export class DataService {

    constructor(private http: HttpClient) {}

    public materials: Material[] = [];

    loadMaterials(): Observable<boolean> {
        return this.http.get("api/materials")
            .map((data: any[]) => {
                this.materials = data;
                return true;
            });
    }
}