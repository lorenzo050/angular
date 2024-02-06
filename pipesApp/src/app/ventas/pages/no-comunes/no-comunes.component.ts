import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrl: './no-comunes.component.css'
})
export class NoComunesComponent {

  nombre: string = "Fernando";

  gender: string = 'male';
  inviteMap: any = { 'male': 'invitarlo', 'female': 'invitarla', 'other': 'invitarlo' };

  //i18nPlural
  clientes: string[] = ["HUan", "Joan", "Maria", "Pablo", "Pedro", "carlo"]

  messageMapping: { [k: string]: string } = {
    '=0': 'Actualmente no tenemos ningun cliente esperando',
    '=1': 'Actualmente tenemos 1 cliente esperando',
    '=2': 'Actualmente tenemos 2 cliente esperando',
    'other': 'Actualmente tenemos varios cliente esperando',
  };

  cambiarCliente() {

  }

  borrarCliente() {
    this.clientes.shift();
  }

  //keyValuePipe
  persona = {
    nombre: "Lorenzo",
    edad: 36,
    direccion: "Valencia"
  }

  // JsonPipe
  heroes = [
    {
      nombre: "Superman",
      vuela: true
    },
    {
      nombre: "Robin",
      vuela: true
    },
    {
      nombre: "Aquaman",
      vuela: false
    }
  ]

/*
  //crear un observable
  miObservable = interval(1000);
*/
  // Con promesa
  /*
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Tenemos data de promesa");
    }, 3500);
  });
*/
}
