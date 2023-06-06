export interface Project {
    id: string;
    name: string;
    color?: string;
}

export interface Section {
    id: string;
    projectId: string;
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
    sections: Section[];
    tasks: Task[];
    quotes: Quote[];
}