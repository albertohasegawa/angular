import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  constructor() { }
  private emitters: {
    [nomeEvento: string]: EventEmitter<any>
  } = {}

  get(nomeEvento: string): EventEmitter<any> {

    if (!this.emitters[nomeEvento]) {
      console.log(nomeEvento);
      this.emitters[nomeEvento] = new EventEmitter<any>();
    }
    return this.emitters[nomeEvento];

  }
}

