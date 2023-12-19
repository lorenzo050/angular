import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent } from './contador.component';
import { heroe } from './heroes/heroe/heroe.component';
//importar ngMoudule ya que el archivo app.modules.ts ya no existe en las nuevas versiones de angular
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContadorComponent,heroe],
 // templateUrl: './app.component.html',
 templateUrl: './heroes/heroe/heroe.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  /* // ejercicio 1
 // title = 'bases';
  title : string = 'contador app';

  //suma y resta numeros
  num: number = 1;
  resultado: number = 10;
  sumar(): void {
    this.resultado =  this.resultado + this.num;
  }
  restar(): void {
    this.resultado =  this.resultado - this.num;
  }

  //suma resta 5
  num5: number = 5;
  resultadocinco: number = 0;
  sumarcinco(): void {
    this.resultadocinco =  this.resultadocinco + this.num5;
  }
  restarcinco(): void {
    this.resultadocinco =  this.resultadocinco - this.num5;
  }
  */
}
