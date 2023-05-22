import { createAction, props } from "@ngrx/store";
import { Project } from "../shared/models";

export const showQuote = createAction('[Task Component] Show quote');

export const addProject = createAction('[NewProject Component] Add', props<Project>());
export const deleteProject = createAction('[Project Component] Delete', props<{ projectId: string }>());
export const updateProject = createAction('[Project Component] Update', props<{ projectId: string, values: Partial<Project> }>());