import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'pessoa', loadChildren:'../app/components/pessoa.module#PessoaModule'},
  {path:'', pathMatch: 'full', redirectTo: ''}


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
