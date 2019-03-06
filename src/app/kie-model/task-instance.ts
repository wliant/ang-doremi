export class TaskInstance {
    id: number;
    priority: number;
    name: string;
    subject: string;
    description: string;
    type: string;
    form: string;
    status: string;
    actualOwner: string;
    createdBy: string;
    createdOn: Date;
    activationTime: Date;
    expirationTime: Date;
}