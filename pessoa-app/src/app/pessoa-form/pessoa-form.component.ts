import { Component, OnInit} from '@angular/core';
import {Pessoa} from '../pessoa';
import {PessoaService} from '../pessoa.service';
export interface Sexo {
  id: number;
  desc: string;
}


@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent implements OnInit {

  selectedValue: string;
  sexos:string[] = ['Masculino', 'Feminino', 'Outro'];
  pes:Pessoa;
  listaPessoas: Array<Pessoa>;
  contador: number = 0;

  constructor(private pessoaService: PessoaService) { }

  getPessoas(): void {
    
  }


  salvar() {
    
    if( !(this.listaPessoas.includes(this.listaPessoas.find(this.pes.cpf))) || this.listaPessoas.length == 0){

      this.listaPessoas.push(this.pes);
      console.log(this.listaPessoas);
      this.pes = new Pessoa;

    }
    else {
      this.listaPessoas[this.pes.cpf].nome = this.pes.nome;
      this.listaPessoas[this.pes.cpf].email = this.pes.email;
      this.listaPessoas[this.pes.cpf].cpf = this.pes.cpf;
    }
    
  }

  excluir(item: string) {
    let indiceARemover = this.listaPessoas.findIndex(p => p.cpf == item);
    this.listaPessoas.splice(indiceARemover, 1);
    
  }

  alterar(item: string) {
    let indice = this.listaPessoas.findIndex(p => p.cpf == item);
    this.pes.nome = this.listaPessoas[indice].nome;
    this.pes.email = this.listaPessoas[indice].email;
    this.pes.cpf = this.listaPessoas[indice].cpf;
    
  }


  ngOnInit() {
    this.pes = new Pessoa;
    this.listaPessoas = new Array<Pessoa>();
    this.pessoaService.getPessoas().subscribe(pessoas => this.listaPessoas = pessoas)
    console.log(this.listaPessoas);
    
  }
  
}
