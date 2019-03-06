import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url = 'http://localhost:8090/rest2/customers';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
      return this.http.get<Customer[]>(this.url)
            .pipe(
                tap(_ => this.log('fetched customers')),
                catchError(this.handleError('getCustomers', []))
            );
  }

  /** GET hero by id. Will 404 if id not found */
  getCustomer(id: number): Observable<Customer> {
    const url = `${this.url}/${id}`;
    return this.http.get<Customer>(url).pipe(
      tap(_ => this.log(`fetched customer id=${id}`)),
      catchError(this.handleError<Customer>(`getCustomer id=${id}`))
    );
  }

  updateHero (customer: Customer): Observable<any> {
    return this.http.put(this.url, customer, httpOptions).pipe(
      tap(_ => this.log(`updated customer id=${customer.id}`)),
      catchError(this.handleError<any>('updateCustomer'))
    );
  }

  addCustomer(customer: Customer): Observable<Customer> {
      return this.http.post<Customer>(this.url, customer, httpOptions).pipe(
          tap((newCustomer: Customer) => this.log(`added Customer w/ id=${newCustomer.id}`)),
          catchError(this.handleError<Customer>('addCustomer'))
      );
  }

  deleteCustomer(customer: Customer | number): Observable<Customer> {
      const id = typeof customer == 'number' ? customer : customer.id;
      const url = `${this.url}/${id}`;

      return this.http.delete<Customer>(url, httpOptions).pipe(
          tap(_ => this.log(`deleted customer id=${id}`)),
          catchError(this.handleError<Customer>('deleteCustomer'))
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
