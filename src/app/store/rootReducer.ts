import { quoteReducer } from "./quotes.reducer";
import { taskReducer } from "./tasks.reducer";

export const rootReducer = {
    tasks: taskReducer,
    quotes: quoteReducer
}