import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";

@Injectable()
export class DbzService { //clase que se va a insertar

    private _personaje: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 1500
        },
        {
            nombre: 'Vegeta',
            poder: 7500
        }
    ]

    get personaje(): Personaje[] {
        return [...this._personaje];
    }

    constructor() {
        console.log("Servicio inicializado");
    }

    agregarPersonaje(personaje: Personaje){
        this._personaje.push(personaje);
    }

}

//export { DbzService };