import { AppRoutingModule } from './routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { SearchComponent } from './components/search/search.component';
import { FilmeDetailComponent } from './components/filme-detail/filme-detail.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { FilmeFormComponent } from './components/filme-form/filme-form.component';
import { ComentarioComponent } from './components/comentario/comentario.component';

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent,
    FilmeFormComponent,
    DashBoardComponent,
    FilmeDetailComponent,
    SearchComponent,
    ComentarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
