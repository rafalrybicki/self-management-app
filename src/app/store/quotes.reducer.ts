import { createReducer } from "@ngrx/store";
import { Quote } from "../shared/models";

const initialState: Quote[] = [
    {
        content: 'An army of sheep led by a lion is better than an army of lions led by a sheep.',
        author: 'Alexander the Great'
    },
    {
        content: 'Be the change that you wish to see in the world.',
        author: 'Mahatma Gandhi'
    },
    {
        content: 'But truly, if I were not Alexander, I would be Diogenes.',
        author: 'Alexander the Great'
    },
    {
        content: 'The fault, dear Brutus, is not in our stars, but in ourselves.',
        author: "William Shakespeare, 'Julius Caesar'"
    },
    {
        content: "Show me a hero, and I'll write you a tragedy.",
        author: 'F. Scott Fitzgerald'
    }
]

export const quotesReducer = createReducer(
    initialState
)