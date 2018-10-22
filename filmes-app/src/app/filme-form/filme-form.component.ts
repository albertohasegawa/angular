import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Filme } from '../filme';
import { FilmeService } from '../filme.service';
import { Busca } from "../busca";
import { Search } from '../search';
@Component({

  selector: 'app-filme-form',
  templateUrl: './filme-form.component.html',
  styleUrls: ['./filme-form.component.css']
})

export class FilmeFormComponent implements OnInit {

  filme: Filme;
  filmes: Busca;
  tit: string;

  constructor(private fs: FilmeService) { }

  buscarPorTitulo() {

    this.filmes = new Busca;
    this.fs.getFilmesPorTitulo(this.tit).subscribe(req => this.filmes = req);
  }



  ngOnInit() {
    this.filme = new Filme;
    this.filmes = new Busca;
    console.log(this.filmes);
    console.log(this.filme);
    
  }

}
