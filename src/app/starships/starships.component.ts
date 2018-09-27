import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {

  starships: Object[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.starships = this.data.getstarships();
  }

}
