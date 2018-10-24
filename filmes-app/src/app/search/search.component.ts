import { Component, OnInit } from '@angular/core';
import { Filme } from '../filme';
import { FilmeService } from '../filme.service';
import { Busca } from "../busca";
import { EventEmitterService } from '../event-emitter.service';

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

  constructor(private emitter: EventEmitterService, private fs: FilmeService) { }

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
    this.emitter.get('buscar').subscribe(req => this.titulo = req);
    this.emitter.get('buscar').subscribe(func => this.buscarAlt(this.titulo));
    this.buscarAlt(this.titulo);
  }

  onAtualizarLista(tit:string) {
    console.log('recebendo titulo');
    console.log(tit);
    
    
  }

}
