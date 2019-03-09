import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../model/customer';
import { ActivatedRoute } from '@angular/router';
import { KieService } from '../services/kie.service';
import { Location } from '@angular/common';
import { CustomerService } from '../services/customer.service';
import { ProductService } from '../services/product.service';
import { catchError, map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  customer: Customer = new Customer({});

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCustomer();
  }

  getCustomer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.customerService.getCustomer(id)
      .subscribe(ord => this.customer = ord);
  }

  goBack(): void {
    this.location.back();
  }

}
