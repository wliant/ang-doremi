import { TaskSummary } from './task-summary';

export class TaskSummaryList {
    taskSummary?: TaskSummary[];

    constructor(ts: any) { 
        this.taskSummary = [];
        for(let i of ts["task-summary"]) {
            let a = new TaskSummary();
            a.id = i["task-id"];
            a.name = i["task-name"];
            a.subject = i["task-subject"];
            a.description = i["task-description"];
            a.status = i["task-status"];
            a.priority = i["task-priority"];
            a.isSkipable = i["task-is-skippable"];
            a.actualOwner = i["task-actual-owner"];
            a.createdBy = i["task-created-by"];
            if(i["task-created-on"]) {
                a.createdOn = new Date(i["task-created-on"]["java.util.Date"]);
            }
            if(i["task-activation-time"]) {
                a.activationTime = new Date(i["task-activation-time"]["java.util.Date"]);
            }
            if(i["task-expiration-time"]) {
                a.expirationTime = new Date(i["task-expiration-time"]["java.util.Date"]);
            }
            a.procInstId = i["task-proc-inst-id"];
            a.procDefId = i["task-proc-def-id"];
            a.containerId = i["task-container-id"];
            a.parentId = i["task-parent-id"];
            this.taskSummary.push(a);
        }
    }
}