export interface Bug {
  id: string;
  gid: string;
  description: string;
  summary: string;
  status: string;
  owner: string;
  createdBy: string;
  createdOn: string;
}

export interface Group {
  gid: string;
  gName: string;
}
