import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  @Output() enviarHijo = new EventEmitter<string>();
  query:string='';

  constructor() { }

  ngOnInit(): void {
  }

  emitPais(): void {
    this.enviarHijo.emit(this.query);
    this.query='';
  }

}
