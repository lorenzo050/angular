import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrl: './basicos.component.css'
})
export class BasicosComponent {

  nombreLower:string = "Lorenzo";
  nombreUpper: string="LORENZO";
  nombreCompleto: string= "Loren Nava"

  //propiedad fecha
  fecha: Date = new Date(); //dia de hoy
}
