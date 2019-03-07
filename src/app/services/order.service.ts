import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private url = 'http://localhost:8090/rest2/orders';
  private approvedOrdersUrl = 'http://localhost:8090/rest2/approved_orders';

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {

    return this.http.get<Order[]>(this.url)
    .pipe(
        map((response: any) => Order.parseList(response)),
        tap(_ => this.log('fetched Orders')),
        catchError(this.handleError('Orders', []))
    );
  }

  getApprovedOrders(): Observable<Order[]> {
    var headers_object = new HttpHeaders();
    headers_object.append('accept', 'application/json');

    const httpOptions = {
      headers: headers_object
    };
    return this.http.get<Order[]>(this.approvedOrdersUrl, httpOptions);
  }

  /** GET hero by id. Will 404 if id not found */
  getOrder(id: number): Observable<Order> {
    const url = `${this.url}/${id}`;
    return this.http.get<Order>(url).pipe(
      map((response: any) => new Order(response)),
      tap(_ => this.log(`fetched order id=${id}`)),
      catchError(this.handleError<Order>(`getOrder id=${id}`))
    );
  }



  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(`OrderService: ${message}`);
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
