import { Project } from '../shared/models';
import { inboxId, secondInboxSectionId, someProjectId } from '../shared/utils';
import { createReducer, on } from "@ngrx/store";
import * as ProjectActions from './projects.actions';
import { v4 as uuid } from 'uuid';

export const initialState: Project[] = [
    {
        name: 'Inbox',
        id: inboxId,
        sections: [
            {
                id: inboxId,
                name: 'default',
                order: 0
            },
            {
                id: secondInboxSectionId,
                name: 'second inbox section',
                order: 1
            }
        ]
    },
    {
        name: 'Some project',
        id: someProjectId,
        sections: [
            {
                id: someProjectId,
                name: 'default',
                order: 0
            }
        ],
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