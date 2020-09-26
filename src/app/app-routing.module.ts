import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetalleComponent } from './pages/personajes/components/detalle/detalle.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';

const routes: Routes = [
  {path: 'personajes', component: PersonajesComponent},
  {path: 'personajes/:id', component: DetalleComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
