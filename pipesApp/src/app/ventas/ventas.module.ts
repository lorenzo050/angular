import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    BasicosComponent,
    NumerosComponent,
    NoComunesComponent,
    OrdenarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],exports:[
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent
  ]
})
export class VentasModule { }
