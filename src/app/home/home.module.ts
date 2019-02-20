import { NgModule } from "@angular/core";

import { HomeAuthResolver } from "./home-auth-resolver.service";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { SharedModule } from "../shared";

@NgModule({
  imports: [SharedModule, HomeRoutingModule],
  declarations: [HomeComponent],
  providers: [HomeAuthResolver]
})
export class HomeModule {}
