import { Component, OnInit , Input} from '@angular/core';
import {Pessoa} from '../pessoa';
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
  salvar() {
    this.pes.id = this.contador;
    this.contador++;
    this.listaPessoas.push(this.pes);
    console.log(this.listaPessoas);
    this.pes = new Pessoa;
    
  }

  excluir(item: number) {
    this.listaPessoas.splice(this.listaPessoas[item].id, 1);
  }

  alterar(item: number) {
    
  }

  constructor() { }

  ngOnInit() {
    this.pes = new Pessoa;
    this.listaPessoas = new Array<Pessoa>();
  }
  
}
