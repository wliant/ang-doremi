const modelName = "com.thesundaylunatics.model.Customer";
export class Customer {
  id?: number;
  name?: string;
  address?: string;
  dateRegistered?: Date;
  creditRisk?: string;

  constructor(cus: any) {
    if(cus[modelName]) {
      cus = cus[modelName];
    }
    this.id = cus.id;
    this.name = cus.name;
    this.address = cus.address;
    if(cus.dateRegistered) {
      this.dateRegistered = new Date(cus.dateRegistered);
    }
    this.creditRisk = cus.creditRisk;
  }

  static parseList(cuss: any) : Customer[] {
    let result : Customer[] = [];
    for(let cus of cuss) {
      result.push(new Customer(cus));
    }
    return result;
  }
}
