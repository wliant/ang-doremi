import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../model/customer';
import { ActivatedRoute } from '@angular/router';
import { KieService } from '../services/kie.service';
import { Location } from '@angular/common';
import { CustomerService } from '../services/customer.service';
import { ProductService } from '../services/product.service';
import { catchError, map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-add-customer-detail',
  templateUrl: './add-customer-detail.component.html',
  styleUrls: ['./add-customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  @Input() customer: Customer = new Customer({});
  customers: Customer[];

  constructor(
    private customerService: CustomerService,
    private location: Location,
    private productService: ProductService,
    private kieService: KieService
  ) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.getCustomers()
      .subscribe(cuss => this.customers = cuss);
  }

  goBack(): void {
    this.location.back();
  }

}
