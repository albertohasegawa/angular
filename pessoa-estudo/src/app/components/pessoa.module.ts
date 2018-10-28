import { PessoaListarComponent } from './pessoa-listar/pessoa-listar.component';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    PessoaRoutingModule,
    FormsModule
  ],
  declarations: [
    PessoaFormComponent,
    PessoaListarComponent
  ]
})
export class PessoaModule { }
