import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, tap } from 'rxjs/operators';
import { Material } from "../shared/material";
import { NotificationService } from "./notification.service";

@Injectable()
export class DataService {
    constructor(private http: HttpClient, private notificationService: NotificationService) { }

    public materials: Material[] = [];

    loadMaterials(): Observable<boolean> {
        return this.http.get("api/materials")
            .pipe(
                tap(_ => this.log(`fetched materials`)),
                map((data: any[]) => {
                    this.materials = data;
                    return true;
                }));
    }

    private log(message: string) {
        this.notificationService.add('dataService: ' + message);
    }
}