import { Component, OnInit} from '@angular/core';
import { PaisSearchResponse } from '../../interfaces/searchResponse.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent implements OnInit {

  constructor(private paisService:PaisService ) { }

  ngOnInit(): void {
  }
  paises : PaisSearchResponse[] = [];
  errorString:string=""
  error:boolean=false


  get results():PaisSearchResponse[]{//preguntar aqui de que tipo devuelve
    return this.paises
  }

  buscar (termino:string){
    console.log(termino)
    this.paisService.buscarPais( termino ).subscribe({
      next: (resp) =>{
          this.paises = resp;
          this.errorString = ""
          this.error = false
      },
      error: (error) =>{
        this.error = true
        this.errorString = termino
      }
  })
  }

}
