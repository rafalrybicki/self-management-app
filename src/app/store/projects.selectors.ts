import { State, Project } from '../shared/models';
import { createSelector } from '@ngrx/store';

export const selectProjects = (state: State) => state.projects;

export const selectProject = createSelector(
    selectProjects,
    (projects: Project[],  projectId: string) => projects.find(projects => projects.id === projectId)
);