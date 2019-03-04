import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { ORDERS } from '../model/mock-orders';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private ordersUrl = 'http://localhost:8090/rest2/orders';

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    var headers_object = new HttpHeaders();
    headers_object.append('accept', 'application/json');

    const httpOptions = {
      headers: headers_object
    };
    return this.http.get<Order[]>(this.ordersUrl, httpOptions);
  }
}
