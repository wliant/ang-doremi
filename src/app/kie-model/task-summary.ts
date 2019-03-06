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
}
  