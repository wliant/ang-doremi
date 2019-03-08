import { Injectable } from '@angular/core';
import { TaskSummaryList } from '../kie-model/task-summary-list';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//refer to https://docs.jboss.org/jbpm/release/7.17.0.Final/jbpm-docs/html_single/#_jbpmtasklifecycle
export const TASK_ACTIONS = {
  CLAIMED: "claimed",
  STARTED: "started", 
  RESUMED: "resumed",
  STOPPED: "stopped",
  SUSPENDED: "suspended",
  SKIPPED: "skipped",
  DELEGATED: "delegated",
  RELEASED: "released",
  FAILED: "failed",
  COMPLETED: "git",
  ACTIVATED: "activated",
  FORWARDED: "forwarded"
};

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

const containerId = "DoReMi-kjar_1.0-SNAPSHOT";

@Injectable({
  providedIn: 'root'
})
export class KieService {
    private url = 'http://localhost:8090/rest/server';
    constructor(private http: HttpClient) { }

    getTasks(): Observable<TaskSummaryList> {
        const taskUrl = `${this.url}/queries/tasks/instances/pot-owners`;
        return this.http.get(taskUrl)
        .pipe(
            map((response: any) => new TaskSummaryList(response)),
            tap(_ => this.log('fetched Tasks')),
            catchError(this.handleError('getTasks'))
        );     
    }

    getTask(id:number) : Observable<any> {
        const theUrl = `${this.url}/queries/tasks/instances/${id}`;
        return this.http.get(theUrl);
    }

    getTaskInput(id:number): Observable<any> {
        const theUrl = `${this.url}/containers/${containerId}/tasks/${id}/contents/input`;
        return this.http.get(theUrl);
    }

    actOnTask(id:number, action:string, data: any = null) : Observable<any> {
        //eg: action can be TASKACTIONS.CLAIMED
        const theUrl = `${this.url}/containers/${containerId}/tasks/${id}/states/${action}`;
        return this.http.put(theUrl, data);
    }

    submitProcess(id:string, data: any = null) : Observable<any> {
        const theUrl = `${this.url}/containers/${containerId}/processes/${id}/instances`;
        return this.http.post(theUrl, data);
    }

      /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(`KieService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}