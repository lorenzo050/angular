import { Component } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrl: './numeros.component.css'
})
export class NumerosComponent {

  //creamos 2 propiedades
  ventasNetas: number = 200000.5678;
  porcentaje: number = 0.48;
}
