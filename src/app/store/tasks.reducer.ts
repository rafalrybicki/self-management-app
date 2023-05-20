import { Task } from "../shared/models";
import { createReducer, on } from "@ngrx/store";
import * as TaskActions from './tasks.actions';
import { getFormattedDate } from "../shared/utils";

export const initialState: Task[] =  [
    {
        id: 'ID_' + Math.random(),
        content: 'Task completed',
        date: getFormattedDate(),
        weight: 1,
        completion: 1,
        order: 1,
        subtasks: 0,
        completedSubtasks: 0
    },
    {
        id: 'ID_' + Math.random(),
        content: 'Task',
        date: getFormattedDate(),
        weight: 1,
        completion: 0,
        order: 2,
        subtasks: 0,
        completedSubtasks: 0
    },
    {
        id: 'ID_' + Math.random(),
        content: 'Task pomodoro',
        date: getFormattedDate(),
        weight: 5,
        completion: 0,
        order: 2,
        subtasks: 5,
        completedSubtasks: 0
    },
    {
        id: 'ID_' + Math.random(),
        content: 'Task tomorrow',
        date: getFormattedDate(new Date(Date.now() + 86400000)),
        weight: 1,
        completion: 0,
        order: 1,
        subtasks: 0,
        completedSubtasks: 0
    }
]

export const taskReducer = createReducer(
    initialState,
    on(TaskActions.deleteTask, (state, { taskId }) => [...state.filter(task => task.id !== taskId)]),
    on(TaskActions.addTask, (state, newTask: Task) => [...state, newTask]),
    on(TaskActions.updateTask, (state, { taskId, values }) => [...state.map((task) => task.id === taskId ? { ...task, ...values } : task)])
);