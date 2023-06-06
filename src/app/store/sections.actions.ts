import { createAction, props } from "@ngrx/store";
import { Section } from "../shared/models";

export const showQuote = createAction('[Task Component] Show quote');

export const addSection = createAction('[NewSection Component] Add', props<Section>());
export const deleteSection = createAction('[Section Component] Delete', props<{ sectionId: string }>());
export const updateSection = createAction('[Section Component] Update', props<{ sectionId: string, values: Partial<Section> }>());