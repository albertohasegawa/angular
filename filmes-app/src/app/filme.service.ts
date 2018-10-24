import { Injectable } from '@angular/core';
import { Filme } from './filme';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Busca } from "./busca";
import { Search } from './search';


const URL_DATA: string = "http://localhost:8080/filme";
const API_KEY: string = "&apikey=cffeece6";
const FILME_ID: string = "&i=tt3896198";


@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  constructor(private http: HttpClient) { }


  getFilmes(): Observable<Filme[]> {
    return this.http.get<Filme[]>(URL_DATA + FILME_ID + '&' + API_KEY);
  }

  getFilmePorId(id: string): Observable<Filme> {
    let buscar: string = "/buscaId?id=" + id;
    return this.http.get<Filme>(URL_DATA + buscar  + API_KEY);
  }

  getFilmesPorTitulo(titulo: string): Observable<Filme[]> {
    let buscar: string = "/buscaT?t=" + titulo; 
    return this.http.get<Filme[]>(URL_DATA + buscar);
  }

  getFilmes20(): Observable<Filme[]> {
    let buscar20: string = "/buscar20";
    return this.http.get<Filme[]>(URL_DATA + buscar20);
  }
  

}
