import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../model/order';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { OrderService }  from '../services/order.service';


@Component({
  selector: 'app-add-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class AddOrderDetailComponent implements OnInit {

  constructor(

  ) { }

  ngOnInit() {

  }


}
