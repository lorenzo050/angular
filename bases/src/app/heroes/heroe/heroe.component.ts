import {Component} from '@angular/core'; // dentro del core de angular necesitamos coger el componente

@Component({
    selector: 'app-heroe', // podemos ponerle el nombre personalizado
    template: `
        <h1>{{titulo}}</h1>
        <h3>La base es: <strong>{{base}}</strong></h3>

        <button (click)="operacion(base)">{{base}}</button>
        <span>{{numero}}</span>
        <button (click)="operacion(-base)">{{base}}</button>
`,
standalone: true
})

export class heroe{ 
    titulo: string = 'Trabajando con el componente Heroes'
    numero: number = 10;
    base: number = 5;

    operacion (valor:number){
        this.numero +=valor;
    }

}