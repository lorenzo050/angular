import { Component, ViewChild,ElementRef } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {

  @ViewChild("txtBuscar") txtBuscar!:ElementRef<HTMLInputElement>;

  constructor (private gifService:GifsService){}

  ngOnInit(){
    const ultimoTermino = this.gifService.historial[0];
    console.log(ultimoTermino);
    if (ultimoTermino) {
      this.gifService.buscarGifsInicio(ultimoTermino);
    }
  }

  buscar(){
   // console.log(termino);
   console.log(this.txtBuscar);

   const valor = this.txtBuscar.nativeElement.value;
  // console.log(valor);

  if (valor.trim().length === 0) {
    return;

  }

  this.gifService.buscarGifs(valor);

   this.txtBuscar.nativeElement.value = "";
  }

}
