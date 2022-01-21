import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExplorarComponent } from './pages/explorar/explorar.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { PaginatesteComponent } from './pages/paginateste/paginateste.component';
import { TesteComponent } from './pages/teste/teste.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'navbar', component: NavbarComponent},
  { path: 'explorar', component: ExplorarComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'teste', component: TesteComponent},
  { path: 'paginateste', component: PaginatesteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
