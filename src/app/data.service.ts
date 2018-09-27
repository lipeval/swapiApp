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
        
    // for(let i = 1; i < 87; i++) {
    //   // peopleArr.push(this.http.get(this.urlPeople + i))
    //   this.http.get(this.urlPeople + i + '/')
    //     .toPromise()
    //     .then(response => response)
    // }
    // console.log(peopleArr);
    // return peopleArr;
  }
  // getPeople(){
    
  //   let arr: Object[];
  //   for(var i = 1; i < 80; i++){
  //     dock.push(`this.urlPeople${i}`);
  //   }
  //   return {
  //     arr: this.http.get(stringify(dock))
  //   }
    
  // }

  getPlanets(){
    return this.http.get(this.urlPlanets);
  }

  getstarships(){
    return this.http.get(this.urlStarships);
  }
}