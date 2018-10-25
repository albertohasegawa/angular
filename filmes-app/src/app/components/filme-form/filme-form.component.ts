import { FilmeService } from './../../services/filme.service';
import { Filme } from './../../models/filme';
import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-filme-form',
  templateUrl: './filme-form.component.html',
  styleUrls: ['./filme-form.component.css']
})

export class FilmeFormComponent implements OnInit {

  filme: Filme;
  filmes: Array<Filme>;
  tit: string;

  constructor(private fs: FilmeService) { }


  buscarPorTitulo() {

    this.filmes = new Array<Filme>();
    this.fs.getFilmes20().subscribe(req => this.filmes = req);
    
  }



  ngOnInit() {
    this.filme = new Filme;
    this.buscarPorTitulo();
    console.log(this.filmes);
    console.log(this.filme);
    
  }

}
