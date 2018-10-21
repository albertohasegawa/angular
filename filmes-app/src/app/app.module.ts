import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmeFormComponent } from './filme-form/filme-form.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { FilmeDetailComponent } from './filme-detail/filme-detail.component';
import { Filme } from 'src/filme';

@NgModule({
  declarations: [
    AppComponent,
    FilmeFormComponent,
    DashBoardComponent,
    FilmeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }