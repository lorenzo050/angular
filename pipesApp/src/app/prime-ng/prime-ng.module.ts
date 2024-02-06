import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//primeNg
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';

import { FieldsetModule } from 'primeng/fieldset';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  exports: [CardModule, ButtonModule, MenubarModule, FieldsetModule],
  imports:[BrowserAnimationsModule]
})
export class PrimeNgModule { }
