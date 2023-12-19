import {Component} from '@angular/core'; 

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
    standalone: true
})

export class heroeComponent{ 
    nombre: string = 'IronMAN'
    edad: number = 40;
    
}