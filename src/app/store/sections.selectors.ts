import { State, Section } from '../shared/models';
import { createSelector } from '@ngrx/store';

export const selectSections = (state: State) => state.sections;

export const selectSectionsByProject = createSelector(
    selectSections,
    (sections: Section[],  projectId: string) => sections.filter(sections => sections.projectId === projectId).sort((a, b) => a.order - b.order)
);