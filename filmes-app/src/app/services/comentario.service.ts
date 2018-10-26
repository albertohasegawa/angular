import { Observable } from 'rxjs';
import { Comentario } from './../models/comentario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL_DATA: string = "http://localhost:8080/comentario/";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(private http: HttpClient) { }

  postComentario(com: Comentario): Observable<Comentario> {
    let postarCom: string = "postar";
    return this.http.post<Comentario>(URL_DATA + postarCom, com, httpOptions);
  }
  getComPorUsr(id: number): Observable<Comentario[]> {
    let buscar: string = "comdousr?usr=" + id; 
    return this.http.get<Comentario[]>(URL_DATA + buscar);
  }
  getComPorFilme(imdbId: string): Observable<Comentario[]> {
    let buscar: string = "comdofilme?imdbid=" + imdbId; 
    return this.http.get<Comentario[]>(URL_DATA + buscar);
  }
}
