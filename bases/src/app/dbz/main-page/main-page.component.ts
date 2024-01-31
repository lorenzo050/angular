import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Personaje } from '../interfaces/dbz.interfaces';
import { PersonajesComponent } from '../personajes/personajes.component';
import { AgregarComponent } from '../agregar/agregar.component';
import { DbzService } from '../services/dbz.service';

interface Personaje2 {
  nombre: string;
  poder: number;
}


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [FormsModule,PersonajesComponent,AgregarComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  providers: [
    DbzService
  ]
})
export class MainPageComponent {


/*
  personaje: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 1500
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ]
*/
  nuevo: Personaje = {
    nombre: "Genio tortuga",
    poder: 1000
  }

  agregarNuevoPersonaje(argumento: Personaje){
   // console.log('Main page component');
   // console.log(argumento)
   this.personaje.push(argumento);
  }

  constructor(private dbzService: DbzService){
   // this.personaje=this.dbzService.personaje;
    
    
  } //propiedad en la clase y asignarle el valor (se conoce como inyeccion de dependencias)

  get personaje():Personaje[]{
    return this.dbzService.personaje
  }



/*
  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    console.log(this.nuevo);
    //insertar array
    this.personaje.push(this.nuevo);
    this.nuevo = {
      nombre: "",
      poder: 0
    }

  }
*/

}
