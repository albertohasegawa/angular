import { ComentarioService } from './../../services/comentario.service';
import { Comentario } from './../../models/comentario';
import { Component, OnInit, Input } from '@angular/core'; 
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {

  @Input('url') url;
  @Input('id_filme') id_filme;
  usuario: Usuario;
  texto: string;
  comentarios: Array<Comentario>;
  comentario: Comentario;
  constructor(private ems: EventEmitterService, private cs: ComentarioService, private us: UsuarioService) { }
  ngOnInit() { 
    this.comentarios = new Array<Comentario>();
    this.usuario = this.us.getUsuario();
    this.pegarDados();
    
    this.buscarComDoFilme(this.id_filme);
  }
  pegarDados() {

  }
  

  inserirComentario() {
    this.comentario = new Comentario();
    
    this.comentario.id_usuario = this.usuario.id;
    this.comentario.imdbId = this.id_filme;
    this.comentario.texto = this.texto;
    this.comentario.hora = new Date();
    this.comentario.nomeUsuario = this.usuario.nome;
    console.log(this.comentario);
    
    this.cs.postComentario(this.comentario).subscribe();
    this.buscarComDoFilme(this.id_filme);
  }

  buscarComDoFilme(imdbId: string) {
    console.log(this.comentario);
    console.log(imdbId);
    
    this.cs.getComPorFilme(imdbId).subscribe(print => console.log('adicionando comentarios =>' + print));
    this.cs.getComPorFilme(imdbId).subscribe(coms => this.comentarios = coms);
  }
  buscarComDoUsuario(id: number) {
    this.cs.getComPorUsr(id).subscribe(coms => this.comentarios = coms);
  }



}
