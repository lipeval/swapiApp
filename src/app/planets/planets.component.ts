import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
// import { Observable } from 'rxjs';

@Component({
  selector: "app-planets",
  templateUrl: "./planets.component.html",
  styleUrls: ["./planets.component.scss"]
})
export class PlanetsComponent implements OnInit {
  planets: Object[];

  constructor(private data: DataService) {}

  ngOnInit() {
    this.planets = this.data.getPlanets();
  }
}
