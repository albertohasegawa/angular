import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmeService } from '../filme.service';
import { Filme } from '../filme';

@Component({
  selector: 'app-filme-detail',
  templateUrl: './filme-detail.component.html',
  styleUrls: ['./filme-detail.component.css']
})

export class FilmeDetailComponent implements OnInit {
  id:string;
  imdbId:string;
  fil: Filme;
  constructor(private route:ActivatedRoute, private fs: FilmeService) { }

  mostrarPorId(id: string) {
    this.fil = new Filme;
    this.fs.getFilmePorId(id).subscribe(req => this.fil = req);
  }
  
  
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
      this.mostrarPorId(this.id);
    }
  
}








