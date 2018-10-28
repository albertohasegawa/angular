import { Pessoa } from './../models/pessoa';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from  '@angular/common/http';
import { Observable } from 'rxjs';
const URL = "http://192.168.25.7:8080/";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
@Injectable({
  providedIn: 'root'
})

export class PessoaService {

  pessoa: Pessoa;

  constructor(private http: HttpClient) { }

  getPessoas(): Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(URL + "pessoa");
  }
  postPessoas(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(URL + "pessoa", pessoa);
  }
  deletePessoas(cpf: string): Observable<string> {
    return this.http.delete<string>(URL + "pessoa/" + cpf);
  }
  putPessoas(pessoa: Pessoa): Observable<String> {
    return this.http.put<String>(URL + "pessoa/" + pessoa.cpf, pessoa);
  }

  pegarPessoa(pessoa: Pessoa) {
    this.pessoa = pessoa;
  }
  enviarPessoa() {
    return this.pessoa;
  }
  anularPessoa() {
    this.pessoa = null;
  }
}
