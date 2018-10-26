import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;

  constructor() { }

  sendUsuario(usr: Usuario) {
    this.usuario = usr;
  }

  getUsuario(): Usuario {
    return this.usuario;
  }


}
