import { Injectable } from '@angular/core';
import { Pessoa } from './pessoa';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const URL_DATA: string = "http://localhost:8080/pessoas";

@Injectable({
  providedIn: 'root'
})


export class PessoaService {

  constructor(private http: HttpClient) { }

  getPessoas(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(URL_DATA);
  }
 
}
