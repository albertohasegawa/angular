import { EventEmitterService } from './../../services/event-emitter.service';
import { FilmeService } from './../../services/filme.service';
import { Filme } from './../../models/filme';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComentarioService } from 'src/app/services/comentario.service';
import { Comentario } from 'src/app/models/comentario';

@Component({
  selector: 'app-filme-detail',
  templateUrl: './filme-detail.component.html',
  styleUrls: ['./filme-detail.component.css']
})

export class FilmeDetailComponent implements OnInit {
  id:string;
  imdbId:string;
  fil: Filme;
  comentarios: Array<Comentario>;
  constructor(private route:ActivatedRoute, private fs: FilmeService, private cs: ComentarioService) { }

  mostrarPorId(id: string) {
    this.fil = new Filme;
    this.comentarios = new Array<Comentario>();
    console.log(this.imdbId);
    
    this.fs.getFilmePorId(id).subscribe(req => this.fil = req);
    this.cs.getComPorFilme(this.id).subscribe(req => this.comentarios = req);
  }
  


  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    // this.ems.get('dadosusr').subscribe(idusr => this.usrid = idusr);
      this.mostrarPorId(this.id);
    }
  
}








