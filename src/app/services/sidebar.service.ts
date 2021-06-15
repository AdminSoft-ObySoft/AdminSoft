import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[] = [
    {titulo: 'Dashboard', icon:'nav-icon fas fa-tachometer-alt', url: '/dashboard'},
    {titulo: 'Usuarios', icon: 'fa fa-user nav-icon', url: 'usuarios'},
    {titulo: 'Productos', icon: 'fas fa-chart-pie nav-icon', url: 'productos'},
    {titulo: 'Categoria', icon: 'fas fa-align-justify nav-icon', url: 'categorias'},
    {titulo: 'Unidades de medidas', icon: 'fas fa-balance-scale nav-icon', url: 'unidades'}
  ];
  

  constructor() { }
}
