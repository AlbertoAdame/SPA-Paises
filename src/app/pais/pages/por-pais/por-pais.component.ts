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
  termino:string = ""
  error:string=""



  // buscarPais(){
  //   this.paisService.buscarPais(this.query)
  //   this.query=""
  // }

  get results():PaisSearchResponse[]{//preguntar aqui de que tipo devuelve
    return this.paises
  }

  buscar (termino:string){
    debugger
    this.termino=termino;
    this.paisService.buscarPais( this.termino ).subscribe({
      next: (resp) =>{
          this.paises = resp;
          this.error = ""
      },
      error: (err) =>{
        this.error = err
      }
  })
  }

}
