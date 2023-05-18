import { State, Task } from '../shared/models';
import { createSelector } from '@ngrx/store';
import { formatPercent } from '@angular/common';

const selectTasks = (state: State) => state.tasks;

export const selectTasksByDate = createSelector(
    selectTasks,
    (tasks: Task[],  props: any) => tasks.filter(task => task.date === props.date)
);

export const selectDatePercentage = createSelector(
    selectTasksByDate,
    (tasks: Task[]) => {
        const totalWeight = tasks.reduce((acc, task) => acc + task.weight, 0);
        const totalCompletion = tasks.reduce((acc, task) => acc + task.completion, 0);

        return formatPercent(totalCompletion / totalWeight, 'en', '1.0-1');
    }
);