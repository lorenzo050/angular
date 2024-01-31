import { Component ,Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { CommonModule } from '@angular/common';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.scss'
})
export class PersonajesComponent {

 // @Input() personaje:Personaje[] = [];

  get personaje(){
    return this.dbzService.personaje;
  }

  constructor(private dbzService: DbzService){};


}
