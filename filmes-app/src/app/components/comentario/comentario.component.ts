import { ComentarioService } from './../../services/comentario.service';
import { Comentario } from './../../models/comentario';
import { Component, OnInit, Input } from '@angular/core'; 
import { EventEmitterService } from 'src/app/services/event-emitter.service';

@Component({
  selector: 'comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {

  @Input() url;
  @Input() usrid;
  @Input() usrnome;
  @Input() id_filme;
  texto: string;
  comentarios: Array<Comentario>;
  comentario: Comentario;
  constructor(private ems: EventEmitterService, private cs: ComentarioService) { }
  ngOnInit() { 
    this.ems.get('emitirdadosusrid').subscribe(idusr => this.usrid = idusr);
    this.ems.get('emitirdadosusrnome').subscribe(idnome => this.usrnome = idnome);
    this.ems.get('passarid').subscribe(idfilme => this.id_filme = idfilme);
    this.buscarComDoFilme(this.id_filme);
  }

  inserirComentario() {
    console.log(this.id_filme);
    console.log(this.usrid)
    console.log(this.texto);
    console.log(this.usrnome);
    
    
    this.comentario.id_usuario = this.usrid;
    this.comentario.imdbId = this.id_filme;
    this.comentario.texto = this.texto;
    this.comentario.hora = new Date();
    this.comentario.nomeUsuario = this.usrnome;
    this.cs.postComentario(this.comentario);
  }

  buscarComDoFilme(imdbId: string) {
    console.log(this.comentario);
    
    this.cs.getComPorFilme(imdbId).subscribe(print => console.log(print));
    this.cs.getComPorFilme(imdbId).subscribe(coms => this.comentarios = coms);
  }
  buscarComDoUsuario(id: number) {
    this.cs.getComPorUsr(id).subscribe(coms => this.comentarios = coms);
  }



}
