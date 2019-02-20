import { Project } from "./project.model";

export type ProjectQuery = {
  findAllProjects: Project[];
  findProject: Project;
  startProject: Project;
  finishProject: Project;
  cancelProject: Project;
  archiveProject: Project;
};
