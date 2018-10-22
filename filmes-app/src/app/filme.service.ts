import { Injectable } from '@angular/core';
import { Filme } from './filme';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Busca } from "./busca";
import { Search } from './search';


const URL_DATA: string = "http://www.omdbapi.com/?";
const API_KEY: string = "apikey=cffeece6";
const FILME_ID: string = "i=tt3896198";


@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  constructor(private http: HttpClient) { }


  getFilmes(): Observable<Filme[]> {
    return this.http.get<Filme[]>(URL_DATA + FILME_ID + '&' + API_KEY);
  }

  getFilmePorId(): Observable<Filme> {
    return this.http.get<Filme>(URL_DATA + FILME_ID + '&' + API_KEY);
  }

  getFilmesPorTitulo(titulo: string): Observable<Busca> {
    let buscar: string = "s=" + titulo; 
    return this.http.get<Busca>(URL_DATA + buscar + '&' + API_KEY);
  }
  

}
