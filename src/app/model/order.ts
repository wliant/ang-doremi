import { Customer } from './customer'

export class Order {
  id: number;
  orderDate?: Date;
  customer?: Customer;
  country?: string;
  status?: string;
  orderValue?: number;
  orderDiscount?: number;

  constructor(ord: any) { 
    this.id = ord.id;
    if(ord.orderDate) {
      this.orderDate = new Date(ord.orderDate);
    }
    if(ord.customer) {
      this.customer = new Customer(ord.customer);
    }
    this.country = ord.country;
    this.status = ord.status;
    this.orderValue = ord.orderValue;
    this.orderDiscount = ord.orderDiscount;
  } 

  static parseList(ords: any) : Order[] {
    let result : Order[] = [];

    for(let ord of ords) {
      result.push(new Order(ord));
    }

    return result;

  }
}
