export type Project = {
  id: string;
  title: string;
  description: string;
  location: String;
  startDateTime: string | Date;
  endDateTime: string | Date;
  status: ProjectStatus;
  keywords: Keyword[];
};

export type Keyword = {
  id: number;
  value: string;
  notes: string;
};

enum ProjectStatus {
  NEW,
  SCHEDULED,
  STARTED,
  FINISHED,
  CANCELLED,
  ARCHIVED
}
