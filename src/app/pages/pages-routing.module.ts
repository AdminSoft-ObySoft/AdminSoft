import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';
import { LoginComponent } from '../auth/login/login.component';


const routes: Routes = [
  {path:'dashboard', component: PagesComponent,
  children:[
    {path: '', component: DashboardComponent, data:{titulo:'Dashboard'}},
    {path: 'usuarios', component: UsuariosComponent, data:{titulo:'Usuarios'}},
    {path: 'productos', component: ProductosComponent, data:{titulo:'Productos'}}
  ]}
  
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }
