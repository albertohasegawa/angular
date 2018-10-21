import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {

  titulo;
  url;
  soma: number = 1+1;



  constructor() { }

  ngOnInit() {

  }

}
