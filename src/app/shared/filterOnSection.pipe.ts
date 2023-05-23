import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './models';

@Pipe({name:'filterUncompletedOnSection'})
export class FilterUncompletedOnSectionPipe implements PipeTransform {
    transform(tasks: Task[], sectionId: string){
        return tasks.filter(task => task.sectionId === sectionId && task.completion !== task.weight);
    }
}