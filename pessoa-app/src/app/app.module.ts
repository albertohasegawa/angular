import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { PessoaListaComponent } from './pessoa-lista/pessoa-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoaFormComponent,
    PessoaListaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
