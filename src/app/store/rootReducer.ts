import { quotesReducer } from "./quotes.reducer";
import { projectsReducer } from "./projects.reducer";
import { tasksReducer } from "./tasks.reducer";
import { sectionsReducer } from "./sections.reducer";

export const rootReducer = {
    projects: projectsReducer,
    sections: sectionsReducer,
    tasks: tasksReducer,
    quotes: quotesReducer
}