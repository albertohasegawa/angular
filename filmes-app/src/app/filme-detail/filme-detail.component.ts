import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filme-detail',
  templateUrl: './filme-detail.component.html',
  styleUrls: ['./filme-detail.component.css']
})
export class FilmeDetailComponent implements OnInit {
id:number;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.id =+ this.route.snapshot.paramMap.get('id');
  }

}
