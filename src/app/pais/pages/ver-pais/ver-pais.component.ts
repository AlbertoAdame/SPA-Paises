import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisSearchResponse } from '../../interfaces/searchResponse.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit{
  code:string='';
  country!:PaisSearchResponse;
  //La exclamación hay que ponerla pq javaScript avisa de que la interfza (PaisSearchResponse) 
  //no está inicializada, pq si te fijas en interfaz no hay ? , por lo que todos los datosson obligatorios,
  // y para arregarlo tendríamos que poner = { name.... } con todos los atributos de la interfaz
  
  constructor(private paisServicio:PaisService,private route:ActivatedRoute) { 
    console.log(route.snapshot.params['id'])
  }

  ngOnInit(): void {
    this.code=this.route.snapshot.params['id']
    this.paisServicio.country(this.code)
    .subscribe({
      next:(resp) => {
        this.country=resp[0];
      },
      error:(err) => {
        console.log(err)
      },
    })
  }

  



}
