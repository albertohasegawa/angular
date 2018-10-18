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


  constructor() { }
  pes:Pessoa;
  listaPessoas: Array<Pessoa>;

  ngOnInit() {
    this.pes = new Pessoa;
    this.listaPessoas = new Array<Pessoa>();
  }
  
}
