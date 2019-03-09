import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../model/order';
import { Customer } from '../model/customer';
import { Product } from '../model/product';
import { ActivatedRoute } from '@angular/router';
import { KieService } from '../services/kie.service';
import { Location } from '@angular/common';
import { OrderService }  from '../services/order.service';
import { CustomerService } from '../services/customer.service';
import { ProductService } from '../services/product.service';
import { catchError, map, tap } from 'rxjs/operators';
import { OrderItem } from '../model/order-item';


@Component({
  selector: 'app-add-order-detail',
  templateUrl: './add-order-detail.component.html',
  styleUrls: ['./add-order-detail.component.scss']
})
export class AddOrderDetailComponent implements OnInit {
  @Input() order: Order = new Order({});
  customers: Customer[];
  products: Product[];
  selectedCustomerId: number;
  selectedProductId: number;

  constructor(
    private orderService: OrderService,
    private customerService: CustomerService,
    private location: Location,
    private productService: ProductService,
    private kieService: KieService
  ) { }

  ngOnInit() {
    this.order.orderDate = new Date();
    this.order.status = "Created";
    this.getCustomers();
    this.getProducts();
  }

  setOrderCustomer(): void {
    this.customerService.getCustomer(this.selectedCustomerId).subscribe(
      cus => this.order.customer = cus
    )
  }

  setOrderItemProduct(oi: OrderItem): void {
    //this.productService.getProduct(this.selectedProductId).subscribe(
     // p => oi.product = p
    //);
    this.productService.getProduct(this.selectedProductId).subscribe(
      p => {
        oi.product = p;
        this.calculateOrderItemValue(oi)
      }
    );
  }

  calculateOrderItemValue(oi: OrderItem): void {
    if(oi.quantity) {

    } else {
      oi.quantity = 0;
    }
    if(oi.product) {
      oi.value = oi.product.unitPrice * oi.quantity;
    }

    this.calculateOrderValue();
  }

  deleteOrderItem(oi: OrderItem): void {
    this.order.orderItems.splice(this.order.orderItems.indexOf(oi), 1);
    this.calculateOrderValue();
  }

  calculateOrderValue(): void {
    let sum = 0;
    for(let oi of this.order.orderItems) {
      sum = sum + oi.value;
    }
    this.order.orderValue = sum;
  }

  getCustomers(): void {
    this.customerService.getCustomers()
      .subscribe(cuss => this.customers = cuss);
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(prds => this.products = prds);
  }

  save(): void {
    this.kieService.submitProcess("DoReMi-kjar.OrderHandling", {"order": {"Order": this.order}}).subscribe(() => this.goBack());
    //this.orderService.addOrder(this.order).subscribe(() => this.goBack());
  }

  addOrderItem(): void {
    let oi = new OrderItem({});
    this.order.orderItems.push(oi);
    this.productService.getProduct(2).subscribe(
      pr => oi.product = pr
    );
  }

  goBack(): void {
    this.location.back();
  }

}
