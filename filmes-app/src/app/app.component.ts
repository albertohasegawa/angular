import { EventEmitterService } from './services/event-emitter.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'filmes-app';
  busca: string;
  idusr: number = 1;
  idnome: string = "alberto";

  constructor(private router: Router ,private emitter: EventEmitterService) {}

  ngOnInit() {  }

  pesquisar(): void {
    console.log('emitindo evento');
    this.emitter.get('buscar').emit(this.busca);
    
  }
  passarDadosUsrId(): void {
    this.emitter.get('emitirdadosusrid').emit(this.idusr);
  }

  passarDadosUsrNome(): void {
    this.emitter.get('emitirdadosusrnome').emit(this.idnome);
  }
}
