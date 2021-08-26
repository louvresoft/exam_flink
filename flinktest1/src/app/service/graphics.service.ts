import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraphicsService {

  constructor(private http: HttpClient) { }


  endpoint: string = 'http://localhost:8000/api/v1';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  getSymbols(){
    const url = `${this.endpoint}/grapics/symbols`;
    return this.http.get(url);
  }

  getDataGrapic(symbol:string){
    const url =`${this.endpoint}/grapics/`+symbol;
    return this.http.get(url);
  }
}
