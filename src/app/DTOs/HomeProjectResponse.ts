import { ProjectDb } from "./Entity/ProjectDb";
export interface HomeProjectResponse {
    status: string,
    data: ProjectDb[]
  }