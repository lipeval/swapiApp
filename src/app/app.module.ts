import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { DetailsComponent } from "./details/details.component";
import { PeopleComponent } from "./people/people.component";
import { StarshipsComponent } from "./starships/starships.component";
import { PlanetsComponent } from "./planets/planets.component";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DetailsComponent,
    PeopleComponent,
    StarshipsComponent,
    PlanetsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
