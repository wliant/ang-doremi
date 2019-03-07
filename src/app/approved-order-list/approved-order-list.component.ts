import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from '../model/order';
import { ModalService } from '../services/modal.service';
import { KieService } from '../services/kie.service';

@Component({
  selector: 'app-approved-order-list',
  templateUrl: './approved-order-list.component.html',
  styleUrls: ['./approved-order-list.component.scss']
})
export class ApprovedOrderListComponent implements OnInit {

  orders : Order[];
  constructor(private orderService: OrderService, private modalService: ModalService, private kieService: KieService) { }

  addOrder(): void {

  }

  getOrders(): void {
    this.kieService.getTasks();
    this.orderService.getApprovedOrders()
      .subscribe(orders => this.orders = orders);
  }

  ngOnInit() {
    this.getOrders();
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

}
