import { Component, Input, Output , EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.scss'
})
export class AgregarComponent {

 // @Input() personaje: Personaje[] = [];

  @Input() nuevo: Personaje = {
    nombre: "",
    poder: 0
  }


  //OUTPUT NUEVO HEROE
  @Output() OnNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    console.log(this.nuevo);

    this.OnNuevoPersonaje.emit(this.nuevo); // OUTPUT generado
    //insertar array
   // this.personaje.push(this.nuevo);
    this.nuevo = {
      nombre: "",
      poder: 0
    }

  }

}
