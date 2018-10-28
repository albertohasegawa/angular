import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { PessoaListarComponent } from './pessoa-listar/pessoa-listar.component';

const routes: Routes = [
  {path:'create', component: PessoaFormComponent},
  {path:'', component: PessoaListarComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
