import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://localhost:8090/rest2/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(this.url)
            .pipe(
                map((response: any) => Product.parseList(response)),
                tap(_ => this.log('fetched Product')),
                catchError(this.handleError('getProducts', []))
            );
  }

  /** GET hero by id. Will 404 if id not found */
  getProduct(id: number): Observable<Product> {
    const url = `${this.url}/${id}`;
    return this.http.get<Product>(url).pipe(
      map((response: any) => new Product(response)),
      tap(_ => this.log(`fetched Product id=${id}`)),
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    );
  }

  updateProduct (product: Product): Observable<any> {
    return this.http.put(this.url, product, httpOptions).pipe(
      map((response: any) => new Product(response)),
      tap(_ => this.log(`updated product id=${product.id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  addProduct(product: Product): Observable<Product> {
      return this.http.post<Product>(this.url, product, httpOptions).pipe(
        map((response: any) => new Product(response)),
          tap((newProduct: Product) => this.log(`added Customer w/ id=${newProduct.id}`)),
          catchError(this.handleError<Product>('addProduct'))
      );
  }

  deleteProduct(product: Product | number): Observable<Product> {
      const id = typeof product == 'number' ? product : product.id;
      const url = `${this.url}/${id}`;

      return this.http.delete<Product>(url, httpOptions).pipe(
          tap(_ => this.log(`deleted product id=${id}`)),
          catchError(this.handleError<Product>('deleteProduct'))
      );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(`ProductService: ${message}`);
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
