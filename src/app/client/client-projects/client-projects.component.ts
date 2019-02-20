import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { Project } from "../../core/models";
import { ProjectService } from "../../core/services";

@Component({
  selector: "app-client-projects",
  templateUrl: "./client-projects.component.html"
})
export class ClientProjectsComponent implements OnInit {
  projects: Observable<Project[]>;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projects = this.projectService.findAllProjects();
  }
}
