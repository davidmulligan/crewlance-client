import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import gql from "graphql-tag";
import { Apollo } from "apollo-angular";

import { Project, ProjectQuery } from "../models";

const findAllProjectsQuery = gql`
  {
    findAllProjects {
      id
      title
      description
    }
  }
`;

const findProjectByIdQuery = gql`
  query findProject($id: ID!) {
    findProject(id: $id) {
      id
      title
      description
      location
      startDateTime
      endDateTime
      status
      keywords {
        id
        value
        notes
      }
    }
  }
`;

const startProjectByIdMutation = gql`
  mutation startProject($id: ID!) {
    startProject(id: $id) {
      id
      title
      description
      location
      startDateTime
      endDateTime
      status
      keywords {
        id
        value
        notes
      }
    }
  }
`;

const finishProjectByIdMutation = gql`
  mutation finishProject($id: ID!) {
    finishProject(id: $id) {
      id
      title
      description
      location
      startDateTime
      endDateTime
      status
      keywords {
        id
        value
        notes
      }
    }
  }
`;

const cancelProjectByIdMutation = gql`
  mutation cancelProject($id: ID!) {
    cancelProject(id: $id) {
      id
      title
      description
      location
      startDateTime
      endDateTime
      status
      keywords {
        id
        value
        notes
      }
    }
  }
`;

const archiveProjectByIdMutation = gql`
  mutation archiveProject($id: ID!) {
    archiveProject(id: $id) {
      id
      title
      description
      location
      startDateTime
      endDateTime
      status
      keywords {
        id
        value
        notes
      }
    }
  }
`;

@Injectable()
export class ProjectService {
  constructor(private apollo: Apollo) {}

  findAllProjects() {
    return this.apollo
      .watchQuery<ProjectQuery>({
        query: findAllProjectsQuery
      })
      .valueChanges.pipe(map(result => result.data.findAllProjects));
  }

  findProjectById(id: String) {
    return this.apollo
      .watchQuery<ProjectQuery>({
        query: findProjectByIdQuery,
        variables: {
          id: id
        }
      })
      .valueChanges.pipe(map(result => result.data.findProject));
  }

  start(id: String) {
    return this.apollo.mutate<ProjectQuery>({
      mutation: startProjectByIdMutation,
      variables: {
        id: id
      }
    });
  }

  finish(id: String) {
    return this.apollo.mutate<ProjectQuery>({
      mutation: finishProjectByIdMutation,
      variables: {
        id: id
      }
    });
  }

  cancel(id: String) {
    return this.apollo.mutate<ProjectQuery>({
      mutation: cancelProjectByIdMutation,
      variables: {
        id: id
      }
    });
  }

  archive(id: String) {
    return this.apollo.mutate<ProjectQuery>({
      mutation: archiveProjectByIdMutation,
      variables: {
        id: id
      }
    });
  }
}
