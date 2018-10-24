import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from './event-emitter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'filmes-app';
  busca: string;

  constructor(private router: Router ,private emitter: EventEmitterService) {}

  ngOnInit() {  }

  pesquisar(): void {
    console.log('emitindo evento');
    this.emitter.get('buscar').emit(this.busca);
    
  }
}
