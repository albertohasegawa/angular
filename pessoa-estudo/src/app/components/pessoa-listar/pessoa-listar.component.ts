import { PessoaService } from './../service/pessoa.service';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../models/pessoa';

@Component({
  selector: 'app-pessoa-listar',
  templateUrl: './pessoa-listar.component.html',
  styleUrls: ['./pessoa-listar.component.css']
})
export class PessoaListarComponent implements OnInit {

  pessoas: Array<Pessoa>;

  constructor(private ps: PessoaService) { }

  ngOnInit() {
    this.listarPessoas();
  }

  listarPessoas() {
    this.ps.getPessoas().subscribe(req => this.pessoas = req);
  }

  excluir(cpf: string) {
    this.ps.deletePessoas(cpf).subscribe(bla => this.listarPessoas());
  }

  alterar(pessoa: Pessoa) {
    this.ps.pegarPessoa(pessoa);
  }
}
