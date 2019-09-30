import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Property } from '../models/property.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'; 
const headers = new HttpHeaders()
.set("Content-Type", "application/json");

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  coords = new EventEmitter<any>();
  baseUrl: string = 'http://localhost:3000/api/properties';
  constructor(private http: HttpClient) { }


  getProperties() {
    return this.http.get<Property[]>(this.baseUrl);
  }

  getPropertyById(id: number) {
    return this.http.get<Property>(this.baseUrl + '/' + id);
  }

  createProperty(property: Property):Observable<Property> {
    console.log('prevhttp');
    let property1 = JSON.stringify({
      "propertytype":"Terreno",
      "street":"calle 1",
      "externalnumber":"9",
      "zipcode":"72710",
      "operationtype":"vender",
      "price":"1350000"
    });
    console.log(property);
    return this.http.post<Property>(this.baseUrl ,JSON.stringify(property),httpOptions);
    
  }
  deleteProperty(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
