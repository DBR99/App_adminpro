import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  // este servicio proporciona los datos que se colocaran en el sidebar
  menu: any = [{
  titulo: 'principal',
  icono: 'mdi mdi-gauge',
  submenu: [
    {titulo: 'Dashboard', url: '/dashboard'},
    {icono: 'ProgressBar', url: '/progress'},
    {titulo: 'Graficas', url: '/graficas1'}
     ]
  }
  ];
  constructor() { }
}
