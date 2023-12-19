import {Component} from '@angular/core'; 

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
    standalone: true
})

export class heroeComponent{ 
    nombre: string = 'Ironman'
    edad: number = 40;

    get nombreMayus(){
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`;
    }
    
}