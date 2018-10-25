import { EventEmitterService } from './../../services/event-emitter.service';
import { FilmeService } from './../../services/filme.service';
import { Filme } from './../../models/filme';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filme-detail',
  templateUrl: './filme-detail.component.html',
  styleUrls: ['./filme-detail.component.css']
})

export class FilmeDetailComponent implements OnInit {
  id:string;
  imdbId:string;
  fil: Filme;
  constructor(private route:ActivatedRoute, private fs: FilmeService, private emitter: EventEmitterService) { }

  mostrarPorId(id: string) {
    this.fil = new Filme;
    this.fs.getFilmePorId(id).subscribe(req => this.fil = req);
  }
  
  passarIdFilme(): void{
    this.emitter.get('passaridfilme').emit(this.imdbId);
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
      this.mostrarPorId(this.id);
    }
  
}








