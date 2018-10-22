import { Component, OnInit } from '@angular/core';
import { Filme } from '../filme';
import { FilmeService } from '../filme.service';
import { Busca } from "../busca";
import { Search } from '../search';

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


  constructor(private fs: FilmeService) { }

  buscarPorTitulo() {

    this.busca = new Busca;
    this.fs.getFilmesPorTitulo(this.tit).subscribe(req => this.busca = req);
    console.log(this.busca);
    
  }

  ngOnInit() {
  }

}
