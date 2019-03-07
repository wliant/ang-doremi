import { TaskSummary } from './task-summary';

export class TaskSummaryList {
    taskSummary?: TaskSummary[];

    constructor(ts: any) { 
        this.taskSummary = [];
        for(let i of ts["task-summary"]) {
            this.taskSummary.push(new TaskSummary(i));
        }
    }
}