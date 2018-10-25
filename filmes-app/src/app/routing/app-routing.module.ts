import { SearchComponent } from './../components/search/search.component';

import { FilmeDetailComponent } from './../components/filme-detail/filme-detail.component';
import { FilmeFormComponent } from './../components/filme-form/filme-form.component';
import { DashBoardComponent } from './../components/dash-board/dash-board.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'dash', component: DashBoardComponent},
  {path:'filmes', component: FilmeFormComponent},
  {path:'detalhes/:id', component: FilmeDetailComponent},
  {path:'search', component: SearchComponent},
  {path: 'search/:titulo', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
