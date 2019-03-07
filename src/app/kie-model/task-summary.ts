export class TaskSummary {
    id: number;
    name: string;
    subject: string;
    description: string;
    status: string;
    priority: number;
    isSkipable: boolean;
    actualOwner: string;
    createdBy: string;
    createdOn: Date;
    activationTime: Date;
    expirationTime: Date;
    procInstId: number;
    procDefId: string;
    containerId: string;
    parentId: string;
    constructor(i: any) { 
        this.id = i["task-id"];
        this.name = i["task-name"];
        this.subject = i["task-subject"];
        this.description = i["task-description"];
        this.status = i["task-status"];
        this.priority = i["task-priority"];
        this.isSkipable = i["task-is-skippable"];
        this.actualOwner = i["task-actual-owner"];
        this.createdBy = i["task-created-by"];
        if(i["task-created-on"]) {
            this.createdOn = new Date(i["task-created-on"]["java.util.Date"]);
        }
        if(i["task-activation-time"]) {
            this.activationTime = new Date(i["task-activation-time"]["java.util.Date"]);
        }
        if(i["task-expiration-time"]) {
            this.expirationTime = new Date(i["task-expiration-time"]["java.util.Date"]);
        }
        this.procInstId = i["task-proc-inst-id"];
        this.procDefId = i["task-proc-def-id"];
        this.containerId = i["task-container-id"];
        this.parentId = i["task-parent-id"];
    }
}
  