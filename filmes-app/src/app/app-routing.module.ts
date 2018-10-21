import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from 'src/app/dash-board/dash-board.component';
import { FilmeFormComponent} from 'src/app/filme-form/filme-form.component';
import { FilmeDetailComponent  } from 'src/app/filme-detail/filme-detail.component';

const routes: Routes = [
  {path:'dash', component: DashBoardComponent},
  {path:'filmes', component: FilmeFormComponent},
  {path:'detalhes/:id', component: FilmeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
