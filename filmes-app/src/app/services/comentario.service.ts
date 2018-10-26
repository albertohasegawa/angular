import { Observable } from 'rxjs';
import { Comentario } from './../models/comentario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL_DATA: string = "http://localhost:8080/comentario/";

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(private http: HttpClient) { }

  postComentario(com: Comentario): void {
    let postarCom: string = "postar";
    this.http.post<Comentario>(URL_DATA + postarCom, com);
  }
  getComPorUsr(id: number): Observable<Comentario[]> {
    let buscar: string = "comdousr?usr=" + id; 
    return this.http.get<Comentario[]>(URL_DATA + buscar);
  }
  getComPorFilme(imdbId: string): Observable<Comentario[]> {
    let buscar: string = "comdofilme?imdbid=" + imdbId; 
    return this.http.get<Comentario[]>(URL_DATA + buscar);
  }
  getImdbPagAtual(): Observable<string> {
    return 
  }
}
