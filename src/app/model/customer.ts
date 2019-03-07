export class Customer {
  id: number;
  isCorporate: boolean;
  name: string;
  address?: string;
  dateRegistered?: Date;

  constructor(cus: any) {
    this.id = cus.id;
    this.isCorporate = false;
    this.isCorporate = cus.isCorporate;
    this.name = cus.name;
    this.address = cus.address;
    if(cus.dateRegistered) {
      this.dateRegistered = new Date(cus.dateRegistered);
    }
  }

  static parseList(cuss: any) : Customer[] {
    let result : Customer[] = [];
    for(let cus of cuss) {
      result.push(new Customer(cus));
    }
    return result;
  }
}
