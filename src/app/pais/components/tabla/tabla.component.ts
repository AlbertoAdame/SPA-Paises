import { Component, Input, OnInit } from '@angular/core';
import { PaisSearchResponse } from '../../interfaces/searchResponse.interfaces';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html'
})
export class TablaComponent implements OnInit {

  @Input() paises: PaisSearchResponse[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
