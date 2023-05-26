export interface Project {
    id: string;
    name: string;
    sections: Section[];
    color?: string;
}

export interface Section {
    id: string;
    name: string;
    order: number;
}

export interface Task {
    id: string;
    projectId: string;
    sectionId: string;
    content: string;
    completion: number;
    completionDate?: number;
    date?: number;
    dateStr?: string;
    subtasks: number;
    completedSubtasks: number;
    order: number;
    weight: number;
}

export interface Quote {
    content: string;
    author?: string
}

export interface State {
    projects: Project[];
    tasks: Task[];
    quotes: Quote[];
}