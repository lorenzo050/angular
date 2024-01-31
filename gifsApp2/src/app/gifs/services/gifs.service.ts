import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGIFResponse } from '../../interface/gifs.interface';


@Injectable({
  providedIn: 'root'
})
export class GifsService {



  private apiKey: string = '9FC7iQtY1owQZfFpMUaEt1P1QYFXNBwz';
  private servicioUrl : string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = []

  public resultados: any[] = [];

  constructor(private http: HttpClient) {

    if (typeof localStorage !== 'undefined' && localStorage.getItem("historial")) {
      this._historial = JSON.parse(localStorage.getItem("historial")!);
      this.cargarHistorialDesdeLocalStorage();
    }

    //  this.cargarHistorialDesdeLocalStorage();


  }

  get historial() {
    this._historial = this._historial.splice(0, 10);
    return [...this._historial];
  }


  buscarGifs(query: string) {

    if (query.trim().length === 0) {
      return;
    }

    query = query.toLowerCase();

    if (this._historial.includes(query)) {
      //se devuelve si ya esta incluido
      return;
    }

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
      console.log(this._historial);

      //importar localstorage
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams().set("api_key", this.apiKey).set("limit", "10").set("q", query);

    console.log(params.toString());


    //this.http.get<SearchGIFResponse>('${ this.servicioUrl}/search, { params })
    this.http.get<SearchGIFResponse>(`https://api.giphy.com/v1/gifs/search?api_key=Ki9gg9ncK1yeh29cBrIYG6IaFqNzW3HX&q=${query}&limit=10`)
      .subscribe((resp: any) => { // ver diferencias entre las promesas y los observables
        console.log(resp.data);
        this.resultados = resp.data;

        localStorage.setItem('ultimaBusqueda', JSON.stringify(this.resultados));
      })

    /*
    fetch("https://api.giphy.com/v1/gifs/search?api_key=Ki9gg9ncK1yeh29cBrIYG6IaFqNzW3HX&q=dragon ball z&limit=10")
      .then(resp => {
        resp.json().then(data => {
          console.log(data);
        })
      })
      */
  }

  buscarGifsInicio(query: string) {

    if (query.trim().length === 0) {
      return;
    }

    query = query.toLowerCase();
    /*
        if (this._historial.includes(query)) {
          //se devuelve si ya esta incluido
          return;
        }
    */
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
      console.log(this._historial);

      //importar localstorage
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }



    this.http.get<SearchGIFResponse>(`https://api.giphy.com/v1/gifs/search?api_key=Ki9gg9ncK1yeh29cBrIYG6IaFqNzW3HX&q=${query}&limit=10`)
      .subscribe((resp: any) => { // ver diferencias entre las promesas y los observables
        console.log(resp.data);
        this.resultados = resp.data;

        localStorage.setItem('ultimaBusqueda', JSON.stringify(this.resultados));
      })

    /*
    fetch("https://api.giphy.com/v1/gifs/search?api_key=Ki9gg9ncK1yeh29cBrIYG6IaFqNzW3HX&q=dragon ball z&limit=10")
      .then(resp => {
        resp.json().then(data => {
          console.log(data);
        })
      })
      */
  }

  public cargarHistorialDesdeLocalStorage() {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('historial')) {
      this._historial = JSON.parse(localStorage.getItem('historial')!);
      // Si hay historial almacenado, realizar la búsqueda inicial

      if (this._historial.length > 0) {
        const ultimoTermino = this._historial[0];
        this.buscarGifs(ultimoTermino);
        console.log(ultimoTermino);
      }
    }
  }



  // Esto nos debería devolver la misma respuestas que nos ha dado el POSTMAN

}
