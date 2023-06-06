import { Section } from '../shared/models';
import { inboxId, inboxSecondSectionId, someProjectId } from '../shared/utils';
import { createReducer, on } from "@ngrx/store";
import * as SectionsActions from './sections.actions';
import { v4 as uuid } from 'uuid';

export const initialState: Section[] = [
    {
        id: inboxId,
        projectId: inboxId,
        name: 'default',
        order: 0
    },
    {
        id: inboxSecondSectionId,
        projectId: inboxId,
        name: 'second section',
        order: 1
    },
    {
        id: uuid(),
        projectId: inboxId,
        name: 'third section',
        order: 2
    },
    {
        id: someProjectId,
        projectId: someProjectId,
        name: 'default',
        order: 0
    },
]

export const sectionsReducer = createReducer(
    initialState,
    on(
        SectionsActions.addSection,
        (state, newSection: Section) => [...state, newSection]
    ),
    on(
        SectionsActions.deleteSection,
        (state, { sectionId }) => [...state.filter(section => section.id !== sectionId)]
        ),
    on(
        SectionsActions.updateSection,
        (state, { sectionId, values }) => [
            ...state.map((section) => section.id === sectionId ? { ...section, ...values } : section)
        ]
    )
);