import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../models/pessoa';
import { PessoaService } from '../service/pessoa.service';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent implements OnInit {

pessoa: Pessoa;
pessoaAlterar: Pessoa;
alterarTrue: boolean = true;
  constructor(private ps: PessoaService) { }

  ngOnInit() {
    if(this.ps.enviarPessoa() != null){
      this.pessoa = this.ps.enviarPessoa();
      this.alterarTrue = true;
    }
    else {
      this.pessoa = new Pessoa();
      this.alterarTrue = false;
    }
  }
  inserir() {
    this.ps.postPessoas(this.pessoa).subscribe();
  } 
  alterar() {
    this.ps.putPessoas(this.pessoa).subscribe();
  }


}
