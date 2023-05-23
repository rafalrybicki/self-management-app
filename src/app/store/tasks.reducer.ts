import { Task } from "../shared/models";
import { createReducer, on } from "@ngrx/store";
import * as TaskActions from './tasks.actions';
import { getFormattedDate, inboxId, secondInboxSectionId, someProjectId } from '../shared/utils';
import { v4 as uuid } from 'uuid';

export const initialState: Task[] =  [
    {
        id: uuid(),
        projectId: inboxId,
        sectionId: inboxId,
        content: 'Task completed order 1',
        date: getFormattedDate(),
        weight: 1,
        completion: 1,
        order: 1,
        subtasks: 0,
        completedSubtasks: 0
    },
    {
        id: uuid(),
        projectId: inboxId,
        sectionId: inboxId,
        content: 'Task order 3',
        date: getFormattedDate(),
        weight: 1,
        completion: 0,
        order: 3,
        subtasks: 0,
        completedSubtasks: 0
    },
    {
        id: uuid(),
        projectId: inboxId,
        sectionId: inboxId,
        content: 'Task order 2',
        date: getFormattedDate(),
        weight: 1,
        completion: 0,
        order: 2,
        subtasks: 0,
        completedSubtasks: 0
    },
    {
        id: uuid(),
        projectId: inboxId,
        sectionId: inboxId,
        content: 'Task order 0',
        date: getFormattedDate(),
        weight: 1,
        completion: 0,
        order: 0,
        subtasks: 0,
        completedSubtasks: 0
    },
    {
        id: uuid(),
        projectId: inboxId,
        sectionId: secondInboxSectionId,
        content: 'Task second section order 1',
        date: getFormattedDate(),
        weight: 5,
        completion: 0,
        order: 1,
        subtasks: 5,
        completedSubtasks: 0
    },
    {
        id: uuid(),
        projectId: someProjectId,
        sectionId: someProjectId,
        content: 'Task tomorrow in some project',
        date: getFormattedDate(new Date(Date.now() + 86400000)),
        weight: 1,
        completion: 0,
        order: 1,
        subtasks: 0,
        completedSubtasks: 0
    }
]

export const tasksReducer = createReducer(
    initialState,
    on(
        TaskActions.deleteTask,
        (state, { taskId }) => [...state.filter(task => task.id !== taskId)]
    ),
    on(
        TaskActions.addTask,
        (state, newTask: Task) => [...state, newTask]
    ),
    on(
        TaskActions.updateTask,
        (state, { taskId, values }) => [...state.map((task) => task.id === taskId ? { ...task, ...values } : task)]
    )
);