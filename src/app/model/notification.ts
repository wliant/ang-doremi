export class Notification {

    id: number;
    subjectType?: string;
    subjectId?: string;
    isRead?: boolean;
    message?: string;
    recipient?: string;

    constructor(noti: any) {
        this.id = noti.id;
        this.subjectType = noti.subjectType;
        this.isRead = noti.isRead;
        this.message = noti.message;
        this.recipient = noti.recipient;
    }

    static parseList(notis: any) : Notification[] {
        let result : Notification[] = [];
        for(let noti of notis) {
            result.push(new Notification(noti));
        }

        return result;
    }
}