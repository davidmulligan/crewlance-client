import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material";

import { Project } from "../../core/models";
import { ProjectService, SweetAlertService } from "../../core/services";

@Component({
  selector: "app-client-projects-view",
  templateUrl: "./client-projects-view.component.html"
})
export class ClientProjectsViewComponent implements OnInit {
  project: Project;

  constructor(
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private sweetAlertService: SweetAlertService,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: { project: Project }) => {
      this.project = data.project;
    });
  }

  private start() {
    this.sweetAlertService
      .confirmAlert("Confirmation", "Are you sure you want to start this project?")
      .then(result => {
        if (result["value"]) {
          this.projectService.start(this.project.id).subscribe(({ data }) => {
            this.project = data.startProject;
            this.snackBar.open("The project was successfully started.", "Dismiss", {
              duration: 3000
            });
          });
        }
      });
  }

  private finish() {
    this.sweetAlertService
      .confirmAlert("Confirmation", "Are you sure you want to finish this project?")
      .then(result => {
        if (result["value"]) {
          this.projectService.finish(this.project.id).subscribe(({ data }) => {
            this.project = data.finishProject;
            this.snackBar.open("The project was successfully finished.", "Dismiss", {
              duration: 3000
            });
          });
        }
      });
  }

  private cancel() {
    this.sweetAlertService
      .confirmAlert("Confirmation", "Are you sure you want to cancel this project?")
      .then(result => {
        if (result["value"]) {
          this.projectService.cancel(this.project.id).subscribe(({ data }) => {
            this.project = data.cancelProject;
            this.snackBar.open("The project was successfully cancelled.", "Dismiss", {
              duration: 3000
            });
          });
        }
      });
  }

  private archive() {
    this.sweetAlertService
      .confirmAlert("Confirmation", "Are you sure you want to archive this project?")
      .then(result => {
        if (result["value"]) {
          this.projectService.archive(this.project.id).subscribe(({ data }) => {
            this.project = data.archiveProject;
            this.snackBar.open("The project was successfully archived.", "Dismiss", {
              duration: 3000
            });
          });
        }
      });
  }
}
