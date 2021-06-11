import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[] = [{
    titulo:'Dashboard',
    icon:'nav-icon fas fa-tachometer-alt',
    submenu:[
      {titulo: 'Usuarios', icon: 'fa fa-user nav-icon', url: 'usuarios'},
      {titulo: 'Productos', icon: 'fas fa-chart-pie nav-icon', url: 'productos'}
    ]
  }];

  constructor() { }
}
