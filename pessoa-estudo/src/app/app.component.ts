import { Component } from '@angular/core';
import { PessoaService } from './components/service/pessoa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private ps: PessoaService) { }
  title = 'pessoa-estudo';

  anular() {
    this.ps.anularPessoa();
  }

}
