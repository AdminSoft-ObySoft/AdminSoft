import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { UnidadesMedidasComponent } from './unidades-medidas/unidades-medidas.component';


const routes: Routes = [

  {path:'dashboard', component: PagesComponent,
  children:[
    {path: '', pathMatch: 'prefix', component: DashboardComponent, data:{titulo:'Dashboard'}},
    {path: 'usuarios', component: UsuariosComponent, data:{titulo:'Usuarios'}},
    {path: 'productos', component: ProductosComponent, data:{titulo:'Productos',}},
    {path: 'categorias', component: CategoriasComponent, data:{titulo:'Categorias',}},
    {path: 'unidades', component: UnidadesMedidasComponent, data:{titulo:'Unidades de medidas',}}
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
