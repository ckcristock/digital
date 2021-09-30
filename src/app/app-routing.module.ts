import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumesComponent } from './components/albumes/albumes.component';

import { HomeComponent } from './components/home/home.component';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'albumes', component: AlbumesComponent },
  { path: 'publicaciones', component: PublicacionesComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
