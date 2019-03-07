import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from '../model/order';
import { ModalService } from '../services/modal.service';
import { KieService } from '../services/kie.service';

@Component({
  selector: 'app-paid-order-list',
  templateUrl: './paid-order-list.component.html',
  styleUrls: ['./paid-order-list.component.scss']
})
export class PaidOrderListComponent implements OnInit {

  orders : Order[];
  constructor(private orderService: OrderService, private modalService: ModalService, private kieService: KieService) { }

  addOrder(): void {

  }

  getOrders(): void {
    this.kieService.getTasks();
    this.orderService.getPaidOrders()
      .subscribe(orders => this.orders = orders);
  }

  ngOnInit() {
    this.getOrders();
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

}
