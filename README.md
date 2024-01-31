# angular
Guia angular

npm install -g @angular/cli
ng new bases

cd bases
ng serve -o

//importar ngMoudule ya que el archivo app.modules.ts ya no existe en las nuevas versiones de angular
import { NgModule } from '@angular/core';

#### Generar componentes
ng generate component ./heroes/lista

Generar build de producción
ng build --configuration production

## generar projecto ngmodules
ng new gifsApp2 --no-standalone

## genera un modulo
ng generate module shared

## genera un componente
ng generate component sidebar