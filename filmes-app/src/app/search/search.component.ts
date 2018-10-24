import { Component, OnInit } from '@angular/core';
import { Filme } from '../filme';
import { FilmeService } from '../filme.service';
import { Busca } from "../busca";
import { Search } from '../search';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  filme: Filme;
  filmes: Array<Filme>;
  tit: string;
  busca: Busca;
  titulo: string;

  constructor(private route:ActivatedRoute, private fs: FilmeService) { }

  buscarPorTitulo() {

    this.filmes = new Array<Filme>();
    this.fs.getFilmesPorTitulo(this.tit).subscribe(req => this.filmes = req);
    console.log(this.busca);
    
  }

  buscarAlt(titulo: string) {
    this.filmes = new Array<Filme>();
    this.fs.getFilmesPorTitulo(titulo).subscribe(req => this.filmes = req);
  }

  ngOnInit() {
    this.titulo = this.route.snapshot.paramMap.get('titulo');
    this.buscarAlt(this.titulo);
  }

}
