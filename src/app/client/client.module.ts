import { NgModule } from "@angular/core";

import { ClientProjectsComponent } from "./client-projects/client-projects.component";
import { ClientProjectsFormComponent } from "./client-projects-form/client-projects-form.component";
import { ClientProjectsViewComponent } from "./client-projects-view/client-projects-view.component";
import { ClientRoutingModule } from "./client-routing.module";
import { ProjectResolver } from "./project-resolver.service";
import { SharedModule } from "./../shared/shared.module";

@NgModule({
  imports: [SharedModule, ClientRoutingModule],
  declarations: [ClientProjectsComponent, ClientProjectsViewComponent, ClientProjectsFormComponent],
  providers: [ProjectResolver]
})
export class ClientModule {}
