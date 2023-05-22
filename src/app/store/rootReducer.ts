import { quotesReducer } from "./quotes.reducer";
import { projectsReducer } from "./projects.reducer";
import { tasksReducer } from "./tasks.reducer";

export const rootReducer = {
    projects: projectsReducer,
    tasks: tasksReducer,
    quotes: quotesReducer
}