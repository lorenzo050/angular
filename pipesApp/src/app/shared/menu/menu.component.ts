import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];
  constructor() { }

  ngOnInit() {

    this.items = [
      {
        label: 'Pipes de Angular',
        icon:'pi pi-fw pi-plus',
        items: [{
          label: 'Textos y Fechas',
          icon: 'pi pi-aling-left', //flecha
          routerLink: ""
        },
        {
          label: 'Números',
          icon: 'pi pi-aling-left',
          routerLink: ""
        },
        {
          label: 'No comuners',
          icon: 'pi pi-aling-left',
          routerLink: ""
        }
        ]
      }
    ]


/*
    this.items = [
      {
        label: 'File',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            { label: 'Project' },
            { label: 'Other' }
          ]
        },
        { label: 'Open' },
        { label: 'Quit' }
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
        ]
      }
    ]
    */
  }
}
