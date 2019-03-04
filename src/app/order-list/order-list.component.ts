import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from '../model/order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orders : Order[];
  selectedOrder : Order;
  onSelect(order: Order): void {
    this.selectedOrder = order;
  }
  constructor(private orderService: OrderService) { }

  getOrders(): void {
    this.orderService.getOrders()
      .subscribe(orders => this.orders = orders);
  }

  ngOnInit() {
    this.getOrders();
  }

}
