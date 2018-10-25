import { Search } from './../../models/search';
import { EventEmitterService } from './../../services/event-emitter.service';
import { Busca } from './../../models/busca';
import { FilmeService } from './../../services/filme.service';
import { Filme } from './../../models/filme';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  filme: Filme;
  filmes: Array<Search>;
  tit: string;
  busca: Busca;
  titulo: string;

  constructor(private emitter: EventEmitterService, private fs: FilmeService) { }

  buscarPorTitulo() {

    this.filmes = new Array<Search>();
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
