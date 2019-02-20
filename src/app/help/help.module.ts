import { NgModule } from "@angular/core";

import { HelpComponent } from "./help.component";
import { HelpRoutingModule } from "./help-routing.module";
import { SharedModule } from "../shared";

@NgModule({
  imports: [SharedModule, HelpRoutingModule],
  declarations: [HelpComponent],
  providers: []
})
export class HelpModule {}
