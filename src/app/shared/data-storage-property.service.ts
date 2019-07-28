import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataStoragePropertyService {

  constructor(private http:HttpClient) { }

  storeProperty(){
    //this.http.put("");
  }
  getProperty()
  {
    this.http.get("")
    .subscribe(
      (response:Response) =>{
        //const recipes:Recipe[] = response.json();
      }
    );
  }
}
