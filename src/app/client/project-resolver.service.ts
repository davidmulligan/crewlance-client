import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { Observable } from "rxjs";
import { take } from "rxjs/operators";

import { Project, ProjectService } from "../core";

@Injectable()
export class ProjectResolver implements Resolve<Project> {
  constructor(private projectService: ProjectService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.projectService
      .findProjectById(route.params["id"])
      .pipe(catchError(err => this.router.navigateByUrl("/")))
      .pipe(take(1));
  }
}
