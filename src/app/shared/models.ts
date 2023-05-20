export interface Task {
    id: string;
    content: string;
    date: string;
    weight: number;
    completion: number;
    order: number;
    subtasks: number;
    completedSubtasks: number;
}

export interface Quote {
    content: string;
    author?: string
}

export interface State {
    tasks: Task[];
    quotes: Quote[];
}