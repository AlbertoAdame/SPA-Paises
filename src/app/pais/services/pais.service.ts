import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { PaisSearchResponse } from '../interfaces/searchResponse.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  url:string="https://restcountries.com/v2/name/";
  results: PaisSearchResponse[] = []
  constructor(private http : HttpClient) { }
  

  buscarPais(query:string):Observable<PaisSearchResponse[]>{
    let clean = query.trim().toLowerCase();
    if(clean!==''){

    }
    
    // this.http.get<PaisSearchResponse[]>(`${this.url}${query}`).subscribe((resp) => this.results =resp);
    // console.log(this.results)
    return this.http.get<PaisSearchResponse[]>(`${this.url}${query}`)    
  } 

}
