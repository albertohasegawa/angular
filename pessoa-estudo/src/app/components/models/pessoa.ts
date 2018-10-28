import { Endereco } from './endereco';
export class Pessoa {

    cpf: string;
    nome: string;
    email: string;
    endereco: Endereco = new Endereco();
}