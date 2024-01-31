import { Component } from '@angular/core';
import { GifsService } from '../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private gifService:GifsService){

  }

  getHistorial(){
   return  this.gifService.historial
  }

  buscar(termino: string){
    console.log(termino);
    this.gifService.buscarGifsInicio(termino);
  }

}
