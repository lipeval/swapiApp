import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { stringify } from 'querystring';
// import { Observable } from 'rxjs';

let dock: Object[];

@Injectable({
  providedIn: 'root'
})


export class DataService {

  


  urlPeople: string = 'https://swapi.co/api/people/';
  urlPlanets: string = "https://swapi.co/api/planets/";
  urlStarships: string = "https://swapi.co/api/starships/";

  constructor(private http: HttpClient) { }

  getPeople() {
    
    let peopleArr: Object[] = [];
    this.http.get(this.urlPeople)
      .toPromise()
      .then(response => {
        // console.log(response.results);
        for(let i = 0; i< 10; i++){
          peopleArr.push(response.results[i])
        }
        // peopleArr.push(response.results)
      })
      console.log(peopleArr)
      return peopleArr;
  }

  getPlanets(){
    let planetsArr: Object[] = [];
    this.http.get(this.urlPlanets)
      .toPromise()
      .then(response => {
        for(let i =0; i < 10; i++){
          planetsArr.push(response.results[i])
        }
      })
    return planetsArr;
  }

  getstarships(){
    let starArr: Object[] = [];
    this.http.get(this.urlStarships)
      .toPromise()
      .then(response => {
        for(let i = 0; i < 10; i++){
          starArr.push(response.results[i])
        }
      })
    return starArr;
  }
}