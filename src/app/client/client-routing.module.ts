import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ClientProjectsComponent } from "./client-projects/client-projects.component";
import { ClientProjectsFormComponent } from "./client-projects-form/client-projects-form.component";
import { ClientProjectsViewComponent } from "./client-projects-view/client-projects-view.component";
import { ProjectResolver } from "./project-resolver.service";

export const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "projects",
        component: ClientProjectsComponent
      },
      {
        path: "projects/create",
        component: ClientProjectsFormComponent
      },
      {
        path: "projects/:id",
        component: ClientProjectsViewComponent,
        resolve: {
          project: ProjectResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {}
