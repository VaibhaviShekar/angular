import { animal } from './animal';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class AnimalService {
    private animalsUrl = 'api/animals';
 constructor(private http:HttpClient) { }

 getAnimal(id: number): Observable<animal> {
    const url = `${this.animalsUrl}/${id}`;
    return this.http.get<animal>(url);
  }
}