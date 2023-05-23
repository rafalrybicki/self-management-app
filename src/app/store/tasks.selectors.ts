import { State, Task } from '../shared/models';
import { createSelector } from '@ngrx/store';
import { formatPercent } from '@angular/common';

const selectTasks = (state: State) => state.tasks;

export const selectTasksByProject = createSelector(
    selectTasks,
    (tasks: Task[],  projectId: string) => tasks.filter(task => task.projectId === projectId).sort((a, b) => a.order - b.order)
);

export const selectTasksByDate = createSelector(
    selectTasks,
    (tasks: Task[],  date: string) => tasks.filter(task => task.date === date)
);

export const selectDatePercentage = createSelector(
    selectTasksByDate,
    (tasks: Task[]) => {
        const totalWeight = tasks.reduce((acc, task) => acc + task.weight, 0);
        const totalCompletion = tasks.reduce((acc, task) => acc + task.completion, 0);

        return formatPercent(totalCompletion / totalWeight, 'en', '1.0-1');
    }
);