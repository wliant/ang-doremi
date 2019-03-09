import { Customer } from './customer'
import { OrderItem } from './order-item'

const modelName = "com.thesundaylunatics.model.Order";
export class Order {
  id?: number;
  orderDate?: Date;
  customer?: Customer;
  country?: string;
  status?: string;
  orderValue?: number;
  orderDiscount?: number;
  discountedValue?: number;
  orderItems?: OrderItem[];

  constructor(ord: any) { 
    if(ord[modelName]) {
      ord = ord[modelName];
    }
    this.id = ord.id;
    if(ord.orderDate) {
      this.orderDate = new Date(ord.orderDate);
    }
    if(ord.customer) {
      this.customer = new Customer(ord.customer);
    }
    this.orderItems = OrderItem.parseList(ord.orderItems);

    this.country = ord.country;
    this.status = ord.status;

    this.orderValue = 0;
    this.orderDiscount = 0;
    this.discountedValue = 0;

    if(ord.orderValue) {
      this.orderValue = ord.orderValue;
    }
    if(ord.orderDiscount) {
      this.orderDiscount = ord.orderDiscount;
    }
    if(ord.discountedValue) {
      this.discountedValue = ord.discountedValuee;
    }
  } 

  static parseList(ords: any) : Order[] {
    let result : Order[] = [];

    for(let ord of ords) {
      result.push(new Order(ord));
    }

    return result;

  }
}
