import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PeopleComponent } from "./people/people.component";
import { PlanetsComponent } from "./planets/planets.component";
import { StarshipsComponent } from "./starships/starships.component";
import { DetailsComponent } from "./details/details.component";

const routes: Routes = [
  // { path: '', redirectTo: '' },
  { path: "people", component: PeopleComponent },
  { path: "planets", component: PlanetsComponent },
  { path: "starships", component: StarshipsComponent },
  { path: "details/:id", component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
