import { Project } from '../shared/models';
import { inboxId, someProjectId } from '../shared/utils';
import { createReducer, on } from "@ngrx/store";
import * as ProjectActions from './projects.actions';

export const initialState: Project[] = [
    {
        name: 'Inbox',
        id: inboxId,
    },
    {
        name: 'Some project',
        id: someProjectId,
        color: 'blue'
    }
]

export const projectsReducer = createReducer(
    initialState,
    on(
        ProjectActions.addProject,
        (state, newProject: Project) => [...state, newProject]
    ),
    on(
        ProjectActions.deleteProject,
        (state, { projectId }) => [...state.filter(project => project.id !== projectId)]
        ),
    on(
        ProjectActions.updateProject,
        (state, { projectId, values }) => [...state.map((project) => project.id === projectId ? { ...project, ...values } : project)]
    )
);