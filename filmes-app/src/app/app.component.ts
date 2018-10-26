import { EventEmitterService } from './services/event-emitter.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './models/usuario';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'filmes-app';
  busca: string;
  usuario: Usuario;

  constructor(private router: Router ,private emitter: EventEmitterService, private us: UsuarioService) {}

  ngOnInit() { 
    this.usuario = new Usuario();
    this.usuario.nome = "Alberto";
    this.usuario.senha = "123";
    this.usuario.usuario = "alb";
    this.usuario.email = "alb@gmail.com";
    this.usuario.id = 1;
    this.us.sendUsuario(this.usuario);
   }

  pesquisar(): void {
    console.log('emitindo evento');
    this.emitter.get('buscar').emit(this.busca);
  }
  passarDadosUsrNome(): void {
    console.log('emitindo nome');
    this.emitter.get('usrnome').emit();
  }
  passarDadosUsrId(): void {
    console.log('emitindo id');
    this.emitter.get('emitirdadosusrid').emit();
  }
}
