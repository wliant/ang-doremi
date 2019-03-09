import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../model/customer';
import { KieService } from '../services/kie.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers : Customer[];
  constructor(private customerService: CustomerService, private kieService: KieService) { }

  addCustomer(): void {

  }

  getCustomers(): void {
    this.customerService.getCustomers()
      .subscribe(customers => this.customers = customers);
  }

  ngOnInit() {
    this.getCustomers();
  }
}
