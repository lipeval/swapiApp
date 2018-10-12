import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
// import { Observable } from 'rxjs';

@Component({
  selector: "app-people",
  templateUrl: "./people.component.html",
  styleUrls: ["./people.component.scss"]
})
export class PeopleComponent implements OnInit {
  // people$: Object;
  people: Object[];
  persnn: string;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.people = this.data.getPeople();
    console.log(this.people[0]);
  }
}
