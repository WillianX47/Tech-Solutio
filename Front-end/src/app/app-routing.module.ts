import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesteComponent } from './pages/teste/teste.component';

const routes: Routes = [
  { path: 'teste', component: TesteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
