import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from '../model/order';
import { KieService } from '../services/kie.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orders : Order[];
  constructor(private orderService: OrderService, private kieService: KieService) { }

  addOrder(): void {

  }

  getOrders(): void {
    this.orderService.getOrders()
      .subscribe(orders => this.orders = orders);
  }

  ngOnInit() {
    this.getOrders();
  }
}
