import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrl: './resultados.component.css'
})
export class ResultadosComponent {

  get resultados() {
    return this.gifsService.resultados;
  }

  constructor(private gifsService: GifsService) { }

  //resultados: any[] = [];

  ngOnInit() {
    // Intentar cargar los resultados desde el almacenamiento local
/*
    if ( typeof localStorage !== 'undefined' && localStorage.getItem("historial")) {
      const ultimaBusqueda = localStorage.getItem('ultimaBusqueda');
      if (ultimaBusqueda) {
        this.resultados = JSON.parse(ultimaBusqueda);
      }
    }
*/
  }
}

