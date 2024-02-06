import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipesApp';

  nombre: string = "Lorenzo Navar"
  valor: number = 1000;
  obj = {
    nombre: "Loren"
  }

  mostrarNombre(){
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
  }
}
