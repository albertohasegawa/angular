import { Search } from './../models/search';
import { Filme } from './../models/filme';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



const URL_DATA: string = "http://localhost:8080/filme";
const API_KEY: string = "&apikey=cffeece6";



@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  constructor(private http: HttpClient) { }




  getFilmePorId(id: string): Observable<Filme> {
    let buscar: string = "/buscaId?id=" + id;
    return this.http.get<Filme>(URL_DATA + buscar  + API_KEY);
  }

  getFilmesPorTitulo(titulo: string): Observable<Search[]> {
    let buscar: string = "/buscaT?t=" + titulo; 
    return this.http.get<Search[]>(URL_DATA + buscar);
  }

  getFilmes20(): Observable<Filme[]> {
    let buscar20: string = "/buscar20";
    return this.http.get<Filme[]>(URL_DATA + buscar20);
  }
  


}
