import { Injectable } from '@angular/core';
import { Notification } from '../model/notification';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private url = 'http://localhost:8090/rest2/notifications';

  constructor(private http: HttpClient) { }

  getNotifications(): Observable<Notification[]> {
      return this.http.get<Notification[]>(this.url)
            .pipe(
                map((response: any) => Notification.parseList(response)),
                tap(_ => this.log('fetched notification')),
                catchError(this.handleError('getNotifications', []))
            );
  }

  getUnreadNotifications(): Observable<Notification[]> {
    const url = `${this.url}/?isRead=false`;
    return this.http.get<Notification[]>(this.url)
    .pipe(
        map((response: any) => Notification.parseList(response)),
        tap(_ => this.log('fetched notification')),
        catchError(this.handleError('getNotifications', []))
    );
  }

  /** GET hero by id. Will 404 if id not found */
  getNotification(id: number): Observable<Notification> {
    const url = `${this.url}/${id}`;
    return this.http.get<Notification>(url).pipe(
      map((response: any) => new Notification(response)),
      tap(_ => this.log(`fetched notification id=${id}`)),
      catchError(this.handleError<Notification>(`getNotification id=${id}`))
    );
  }

  updateNotification (notification: Notification): Observable<any> {
    return this.http.put(this.url, notification, httpOptions).pipe(
      map((response: any) => new Notification(response)),
      tap(_ => this.log(`updated notification id=${notification.id}`)),
      catchError(this.handleError<any>('updateNotification'))
    );
  }

  addNotification(notification: Notification): Observable<Notification> {
      return this.http.post<Notification>(this.url, notification, httpOptions).pipe(
          map((response: any) => new Notification(response)),
          tap((newNotification: Notification) => this.log(`added Notification w/ id=${newNotification.id}`)),
          catchError(this.handleError<Notification>('addNotification'))
      );
  }

  deleteNotification(notification: Notification | number): Observable<Notification> {
      const id = typeof notification == 'number' ? notification : notification.id;
      const url = `${this.url}/${id}`;

      return this.http.delete<Notification>(url, httpOptions).pipe(
          tap(_ => this.log(`deleted notification id=${id}`)),
          catchError(this.handleError<Notification>('deleteNotification'))
      );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(`CustomerService: ${message}`);
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
