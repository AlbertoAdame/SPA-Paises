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
  country:any;
  constructor(private paisServicio:PaisService,private route:ActivatedRoute) { 
    console.log(route.snapshot.params['id'])
  }

  ngOnInit(): void {
    this.code=this.route.snapshot.params['id']
    this.paisServicio.country(this.code)
    .subscribe({
      next(resp) {
        this.country=resp[0];
      },
      error(err) {
        console.log(err)
      },
    })
  }

  // get pais():PaisSearchResponse{
    
  // }
  



}
