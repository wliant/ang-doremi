import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../model/customer';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-add-customer-detail',
  templateUrl: './add-customer-detail.component.html',
  styleUrls: ['./add-customer-detail.component.css']
})
export class AddCustomerDetailComponent implements OnInit {
  customer: Customer = new Customer({});

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private location: Location
  ) { }

  ngOnInit() {

  }

  save(): void {
      this.customerService.addCustomer(this.customer).subscribe(
        () => this.goBack()
      );
  }

  goBack(): void {
    this.location.back();
  }

}
