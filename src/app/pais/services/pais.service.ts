import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { PaisSearchResponse } from '../interfaces/searchResponse.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  url:string="https://restcountries.com/v3.1/";
  results: PaisSearchResponse[] = []
  constructor(private http : HttpClient) { }
  

  buscarPais(query:string):Observable<PaisSearchResponse[]>{
    let clean = query.trim().toLowerCase();
    if(clean!==''){//preguntar pq cuando lo meto aquí me da error, y como lo arreglo
      
    }  
    
    return this.http.get<PaisSearchResponse[]>(`${this.url}name/${clean}`) 
        
  } 

  buscarCapital(query:string):Observable<PaisSearchResponse[]>{
    let clean = query.trim().toLowerCase();
    if(clean!==''){

    }

    return this.http.get<PaisSearchResponse[]>(`${this.url}capital/${query}`)    
  } 



  country(code:string):Observable<PaisSearchResponse[]>{
    return this.http.get<PaisSearchResponse[]>(`${this.url}alpha/${code}`)  
  }
}
