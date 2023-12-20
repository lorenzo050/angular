import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent {

  heroes: string[] = ["Thor","Spider-man","Superman","Hulk"]
  heroes2: string[] = []

  borrarHeroe(){
    this.heroes2.push(this.heroes[0]);
    this.heroes.shift(); 
    
  }
}
