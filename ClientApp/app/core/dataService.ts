﻿import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map, tap, catchError } from 'rxjs/operators';
import { Material } from "../shared/material";
import { NotificationService } from "./notification.service";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DataService {
    constructor(private http: HttpClient, private notificationService: NotificationService) { }

    public materials: Material[] = [];
    private readonly materialsUrl = "api/materials";

    loadMaterials(): Observable<boolean> {
        return this.http.get(this.materialsUrl).pipe(
            tap(_ => this.log(`fetched materials`)),
            catchError(this.handleError('loadMaterials', [])),
            map((data: any[]) => {
                this.materials = data;
                return true;
            }));
    }

    addMaterial(material: Material): Observable<Material> {
        return this.http.post<Material>(this.materialsUrl, material, httpOptions).pipe(
            tap(mat => this.log(`added material w/ id=${mat.id}`)),
            catchError(this.handleError<Material>('addMaterial'))
        );
    }

    updateMaterial(material: Material): Observable<Material> {
        return this.http.put<Material>(this.materialsUrl, material, httpOptions).pipe(
            tap(_ => this.log(`updated material w/ id=${material.id}`)),
            catchError(this.handleError<Material>('updateMaterial'))
        );
    }

    deleteMaterial(id: number): Observable<boolean> {
        return this.http.delete(`${this.materialsUrl}/${id}`, httpOptions).pipe(
            tap(_ => this.log(`deleted material w/ id=${id}`)),
            catchError(this.handleError('deleteMaterial')),
            map(() => {
                return true;
            }));
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result
            return of(result as T);
        }
    }

    private log(message: string) {
        this.notificationService.add('dataService: ' + message);
    }
}